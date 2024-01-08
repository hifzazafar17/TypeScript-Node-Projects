import inquirer from 'inquirer';
import natural from 'natural';
import chalk from 'chalk';
import animation from 'chalk-animation';
import figlet from 'figlet'; // Library for ASCII art text
import boxen from 'boxen'; // Library for creating boxes around text
import ora from 'ora'; // Library for elegant terminal spinners
import cliSpinners from 'cli-spinners'; // Collection of spinners for ora
import randomColor from 'randomcolor'; // Library for generating random colors
// NLP Utility
function processInput(input) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(input.toLowerCase()) || [];
    return tokens;
}
// Code Snippets
const codeSnippets = {
    'loop through array': 'for (let i = 0; i < array.length; i++) { }',
    'create variable': 'const variableName = value;',
    'if statement': 'if (condition) {\n\t// code to be executed if the condition is true\n}',
    'else statement': 'if (condition) {\n\t// code to be executed if the condition is true\n} else {\n\t// code to be executed if the condition is false\n}',
    'else if statement': 'if (condition1) {\n\t// code to be executed if condition1 is true\n} else if (condition2) {\n\t// code to be executed if condition2 is true\n} else {\n\t// code to be executed if none of the conditions are true\n}',
    'switch statement': 'switch (variable) {\n\tcase value1:\n\t\t// code to be executed if variable === value1\n\t\tbreak;\n\tcase value2:\n\t\t// code to be executed if variable === value2\n\t\tbreak;\n\tdefault:\n\t\t// code to be executed if variable is different from all values\n}',
    'function declaration': 'function functionName(parameters) {\n\t// function body\n}',
    'function with overloads': 'function greet(name: string): string;\nfunction greet(firstName: string, lastName: string): string;\n\nfunction greet(arg1: string, arg2?: string): string {\n\tif (arg2) {\n\t\treturn `Hello, ${arg1} ${arg2}!`;\n\t} else {\n\t\treturn `Hello, ${arg1}!`;\n\t}\n}\n\nconst result1 = greet("John"); // Hello, John!\nconst result2 = greet("Jane", "Doe"); // Hello, Jane Doe!',
    'arrow function': 'const add = (a: number, b: number): number => a + b;',
    'array declaration': 'const myArray: number[] = [1, 2, 3];',
    'array push': 'myArray.push(newValue);',
    'array pop': 'const removedElement = myArray.pop();',
    'array shift': 'const shiftedElement = myArray.shift();',
    'array unshift': 'myArray.unshift(newValue);',
    'array slice': 'const newArray = myArray.slice(startIndex, endIndex);',
    'array splice': 'const removedElements = myArray.splice(startIndex, deleteCount, item1, item2, ...);',
    'array indexOf': 'const index = myArray.indexOf(searchValue);',
    'array includes': 'const includesValue = myArray.includes(searchValue);',
    'array find': 'const foundElement = myArray.find(element => element.someCondition);',
    'array forEach': 'myArray.forEach(item => {\n\t// code to be executed for each item\n});',
    'object declaration': 'const myObject: Record<string, any> = { key: value };',
    'object type': 'let user: { name: string; age: number; } = { name: "John", age: 25 };',
    'optional properties': 'let userDetails: { name: string; age?: number; } = { name: "John" };',
    'readonly properties': 'let readonlyUser: { readonly name: string; readonly age: number; } = { name: "John", age: 25 };',
    'nested object type': 'let person: { name: string; address: { city: string; postalCode: string; }; } = {\n\tname: "John",\n\taddress: { city: "New York", postalCode: "10001" }\n};',
    'object type alias': 'type Person = { name: string; age: number; }; \n\nlet user: Person = { name: "John", age: 25 };',
    'optional properties with alias': 'type UserDetails = { name: string; age?: number; }; \n\nlet userDetails: UserDetails = { name: "John" };',
    'Nested Object type': 'type Address = { city: string; postalCode: string; }; \n\ntype Person = { name: string; age: number; address: Address; }; \n\nlet person: Person = {\n\tname: "John",\n\tage: 25,\n\taddress: { city: "New York", postalCode: "10001" }\n};',
    'nested object type alias': 'type Address = { city: string; postalCode: string; }; \n\ntype Person = { name: string; age: number; address: Address; }; \n\ntype Employee = { id: number; position: string; person: Person; }; \n\nlet employee: Employee = {\n\tid: 1,\n\tposition: "Developer",\n\tperson: {\n\t\tname: "Alice",\n\t\tage: 30,\n\t\taddress: { city: "London", postalCode: "SW1A 1AA" }\n\t}\n};',
    'nested object with optional properties': 'type Address = { city: string; postalCode?: string; }; \n\ntype Person = { name: string; age: number; address: Address; }; \n\nlet person: Person = {\n\tname: "Bob",\n\tage: 28,\n\taddress: { city: "Paris" }\n};',
    'nested object with optional properties type alias': 'type Address = { city: string; postalCode?: string; }; \n\ntype Person = { name: string; age: number; address: Address; }; \n\ntype Employee = { id: number; position: string; person?: Person; }; \n\nlet employee: Employee = {\n\tid: 2,\n\tposition: "Manager"\n};',
    'readonly properties with alias': 'type ReadonlyUser = { readonly name: string; readonly age: number; }; \n\nlet readonlyUser: ReadonlyUser = { name: "John", age: 25 };',
    'Nested object type alias': 'type Address = { city: string; postalCode: string; }; \n\ntype PersonWithAddress = { name: string; address: Address; }; \n\nlet person: PersonWithAddress = {\n\tname: "John",\n\taddress: { city: "New York", postalCode: "10001" }\n};',
    'function with object parameter': 'function printUser(user: { name: string; age: number }) {\n\tconsole.log(`Name: ${user.name}, Age: ${user.age}`);\n}',
    'type alias for object': 'type User = { name: string; age: number; }; let newUser: User = { name: "John", age: 25 };',
    'intersection types for objects': 'type Car = { brand: string; model: string }; type ElectricCar = { batteryCapacity: number } & Car;',
    'mapped types': 'type Readonly<T> = { readonly [K in keyof T]: T[K] }; type ReadonlyUser = Readonly<User>;',
    'partial types': 'type Partial<T> = { [K in keyof T]?: T[K] }; type PartialUser = Partial<User>;',
    'pick types': 'type Pick<T, K extends keyof T> = { [P in K]: T[P] }; type PickedUser = Pick<User, "name">;',
    'omit types': 'type Omit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }; type OmittedUser = Omit<User, "age">;',
    'Intersection types for objects': 'type Car = { brand: string; model: string; }; \n\ntype ElectricCar = { batteryCapacity: number } & Car; \n\nlet electricCar: ElectricCar = {\n\tbrand: "Tesla",\n\tmodel: "Model S",\n\tbatteryCapacity: 100\n};',
    'intersection types with optional properties': 'type Person = { name: string; age: number; }; \n\ntype Employee = { jobTitle: string } & Partial<Person>; \n\nlet employee: Employee = {\n\tname: "Alice",\n\tjobTitle: "Software Engineer"\n};',
    'intersection types with different property names': 'type Shape = { shapeType: string; sides: number; }; \n\ntype Color = { color: string; }; \n\ntype ColoredShape = Shape & Color; \n\nlet coloredShape: ColoredShape = {\n\tshapeType: "Circle",\n\tsides: 0, // A circle technically has 0 sides\n\tcolor: "Blue"\n};',
    'intersection types with common properties': 'type Printable = { print: () => void }; \n\ntype Loggable = { log: () => void }; \n\ntype Document = Printable & Loggable; \n\nlet document: Document = {\n\tprint: () => console.log("Printing..."),\n\tlog: () => console.log("Logging...")\n};',
    'any type': 'let variable: any = 42; \nvariable = "Hello, TypeScript!"; \nvariable = [1, 2, 3];',
    'any type with array': 'let mixedArray: any[] = [1, "two", true]; \nmixedArray.push({ key: "value" });',
    'any type with function': 'function performAction(input: any): any { \n\t// Do something with input \n\treturn input; \n} \n\nlet result: any = performAction("Hello");',
    'unknown type': 'let userInput: unknown = "Hello, TypeScript!"; \nlet userLength: number; \n\nif (typeof userInput === "string") { \n\tuserLength = userInput.length; \n} else { \n\tuserLength = 0; \n}',
    'unknown type with type assertion': 'let userInput: unknown = "Hello, TypeScript!"; \nlet userLength: number; \n\nuserLength = (userInput as string).length;',
    'unknown type with type guard function': 'function isString(value: unknown): value is string { \n\treturn typeof value === "string"; \n} \n\nlet userInput: unknown = "Hello, TypeScript!"; \nlet userLength: number; \n\nif (isString(userInput)) { \n\tuserLength = userInput.length; \n} else { \n\tuserLength = 0; \n}',
    'explicit casting with as keyword': 'let someValue: any = "Hello, TypeScript!"; \nlet strLength: number = (someValue as string).length;',
    'explicit casting with angle brackets': 'let someValue: any = "Hello, TypeScript!"; \nlet strLength: number = (<string>someValue).length;',
    'safe explicit casting with unknown type': 'let userInput: unknown = "Hello, TypeScript!"; \n\nif (typeof userInput === "string") { \n\tlet userLength: number = (userInput as string).length; \n\tconsole.log(userLength); \n} else { \n\tconsole.error("Invalid type for userInput."); \n}',
    'regular enum': 'enum Direction {\n\tUp,\n\tDown,\n\tLeft,\n\tRight,\n}\n\nlet userDirection: Direction = Direction.Up;',
    'const enum': 'const enum Direction {\n\tUp,\n\tDown,\n\tLeft,\n\tRight,\n}\n\nlet userDirection: Direction = Direction.Up;',
    'structural typing': 'type Person = { name: string; age: number; }; \n\nlet personLiteral = { name: "John", age: 25 }; \nlet person: Person = personLiteral;',
    'additional properties': 'type Person = { name: string; age: number; }; \n\nlet personLiteral = { name: "John", age: 25, gender: "Male" }; \nlet person: Person = personLiteral;',
    'function parameter structural typing': 'type PrintPerson = (person: { name: string; age: number }) => void; \n\nlet printPerson: PrintPerson = (person) => { \n\tconsole.log(`Name: ${person.name}, Age: ${person.age}`); \n}; \n\nlet personLiteral = { name: "John", age: 25 }; \nprintPerson(personLiteral);',
    'duck typing': 'type Quackable = { quack: () => void }; \n\ntype Flyable = { fly: () => void }; \n\nfunction performActions(duck: Quackable & Flyable) { \n\tduck.quack(); \n\tduck.fly(); \n} \n\nlet duck = { \n\tquack: () => console.log("Quack!"), \n\tfly: () => console.log("Flying...") \n}; \n\nperformActions(duck);',
    'class declaration': 'class MyClass {\n\t// class members\n}',
    'interface declaration': 'interface MyInterface {\n\t// interface members\n}',
    'map function': 'const doubledArray = myArray.map(num => num * 2);',
    'filter function': 'const evenNumbers = myArray.filter(num => num % 2 === 0);',
    'reduce function': 'const sum = myArray.reduce((acc, num) => acc + num, 0);',
    'template literal': 'const greeting = `Hello, ${name}!`;',
    'try-catch block': 'try {\n\t// code that might throw an exception\n} catch (error) {\n\t// handle the exception\n}',
    'async function': 'async function fetchData() {\n\tconst response = await fetch(url);\n\tconst data = await response.json();\n\treturn data;\n}',
    'promise': 'const myPromise = new Promise((resolve, reject) => {\n\t// async operation, resolve on success, reject on failure\n});',
    'async/await with promise': 'async function fetchData() {\n\ttry {\n\t\tconst data = await myPromise;\n\t\t// handle data\n\t} catch (error) {\n\t\t// handle error\n\t}\n}',
    'class inheritance': 'class ChildClass extends ParentClass {\n\t// child class members\n}',
    'module import': 'import { Module } from \'module\';',
    'module import alias': 'import * as MyModule from \'module\';',
    'default import': 'import Module from \'module\';',
    'multiple imports': 'import { Module1, Module2 } from \'modules\';',
    'namespace import': 'import * as MyNamespace from \'module\';',
    'module export': 'export const myFunction = () => {\n\t// function body\n};',
    'default export': 'export default class MyClass {\n\t// class members\n};',
    'export multiple': 'export { Function1, Function2 };',
    'export as alias': 'export { MyFunction as AliasFunction };',
    'export default function': 'export default function myFunction() {\n\t// function body\n};',
    'export default class': 'export default class MyClass {\n\t// class members\n};',
    'export namespace': 'export namespace MyNamespace {\n\t// namespace members\n};',
    'union type': 'let variable: number | string;',
    'function with union type': 'function displayData(data: number | string) {\n\tconsole.log(data);\n}',
    'nullable union type': 'let value: number | null;',
    'function with nullable union type': 'function processData(data: number | null) {\n\tif (data !== null) {\n\t\t// code to handle non-null data\n\t}\n}',
    'union type in arrays': 'let array: (number | string)[] = [1, "two", 3, "four"];',
    'union type in objects': 'let obj: { key: number | string } = { key: "value" };',
    'type alias with union': 'type Result = number | string;',
    'discriminated union': 'type Shape = { kind: "circle"; radius: number } | { kind: "rectangle"; width: number; height: number };',
    'type guards': 'function displayShape(shape: Shape) {\n\tif (shape.kind === "circle") {\n\t\tconsole.log("Circle with radius:", shape.radius);\n\t} else {\n\t\tconsole.log("Rectangle with width and height:", shape.width, shape.height);\n\t}\n}',
    'tuple example': 'let person: [string, number, boolean] = ["John", 25, true];\n\n// Accessing tuple elements\nlet name: string = person[0];\nlet age: number = person[1];\nlet isActive: boolean = person[2];\n\nconsole.log(`Name: ${name}, Age: ${age}, IsActive: ${isActive}`);',
    'intersection types': 'type Car = { brand: string; model: string }; type ElectricCar = Car & { batteryCapacity: number };',
    'object-oriented programming example': 'class Animal {\n\tprivate name: string;\n\tprivate age: number;\n\n\tconstructor(name: string, age: number) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n\n\tpublic makeSound(): void {\n\t\tconsole.log("Animal makes a sound");\n\t}\n\n\tpublic displayInfo(): void {\n\t\tconsole.log(`Name: ${this.name}, Age: ${this.age}`);\n\t}\n}\n\n// Create an instance of the Animal class\nconst cat = new Animal("Fluffy", 3);\n\n// Call methods on the instance\ncat.makeSound();\ncat.displayInfo();',
    'class structural typing question': '// Structural Typing Question\n\nclass Dog {\n\tname: string;\n\tage: number;\n\n\tconstructor(name: string, age: number) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n}\n\nclass Cat {\n\tname: string;\n\tage: number;\n\n\tconstructor(name: string, age: number) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n}\n\nfunction printAnimalInfo(animal: { name: string; age: number }): void {\n\tconsole.log(`Name: ${animal.name}, Age: ${animal.age}`);\n}\n\n// Create instances of Dog and Cat\nconst myDog = new Dog("Buddy", 2);\nconst myCat = new Cat("Whiskers", 1);\n\n// Call the function with instances of Dog and Cat\nprintAnimalInfo(myDog);\nprintAnimalInfo(myCat);',
    'class structural typing example': 'class Person {\n\tname: string;\n\tage: number;\n\n\tconstructor(name: string, age: number) {\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n}\n\nclass Employee {\n\tname: string;\n\toffice: string;\n\n\tconstructor(name: string, office: string) {\n\t\tthis.name = name;\n\t\tthis.office = office;\n\t}\n}\n\nfunction printInfo(person: { name: string; age: number }): void {\n\tconsole.log(`Name: ${person.name}, Age: ${person.age}`);\n}\n\n// Instances of Person and Employee\nconst john: Person = new Person("John", 30);\nconst alice: Employee = new Employee("Alice", "Building A");\n\n// Both instances can be passed to the function\nprintInfo(john);\nprintInfo(alice);',
    'typing confusion example': 'function add(a: number, b: number): number {\n\treturn a + b;\n}\n\n// Example 1: Correct usage\nconst result1: number = add(5, 10);\nconsole.log("Result 1:", result1);\n\n// Example 2: Typing confusion\nconst result2: number = add("Hello", 10);\nconsole.log("Result 2:", result2); // Output: Result 2: Hello10',
    'Typing confusion example': 'function add(a: number, b: number): number {\n\treturn a + b;\n}\n\n// Example 1: Correct usage\nconst result1: number = add(5, 10);\nconsole.log("Result 1:", result1);\n\n// Example 2: Typing confusion\nconst result2: number = add("Hello", 10);\nconsole.log("Result 2:", result2); // Output: Result 2: Hello10',
    'inheritance example': 'class Animal {\n\tname: string;\n\n\tconstructor(name: string) {\n\t\tthis.name = name;\n\t}\n\n\tmakeSound(): void {\n\t\tconsole.log("Animal makes a sound");\n\t}\n}\n\nclass Dog extends Animal {\n\tbreed: string;\n\n\tconstructor(name: string, breed: string) {\n\t\tsuper(name);\n\t\tthis.breed = breed;\n\t}\n\n	bark(): void {\n\t\tconsole.log("Woof! Woof!");\n\t}\n}\n\n// Create an instance of Dog\nconst myDog = new Dog("Buddy", "Labrador");\n\n// Call methods from the base class and the derived class\nmyDog.makeSound(); // Inherited method\nmyDog.bark(); // Method from the derived class\nconsole.log(`Name: ${myDog.name}, Breed: ${myDog.breed}`);',
    'abstract class example': 'abstract class Shape {\n\tabstract calculateArea(): number;\n}\n\nclass Circle extends Shape {\n\tradius: number;\n\n\tconstructor(radius: number) {\n\t\tsuper();\n\t\tthis.radius = radius;\n\t}\n\n\tcalculateArea(): number {\n\t\treturn Math.PI * this.radius ** 2;\n\t}\n}\n\nclass Square extends Shape {\n\tsideLength: number;\n\n\tconstructor(sideLength: number) {\n\t\tsuper();\n\t\tthis.sideLength = sideLength;\n\t}\n\n\tcalculateArea(): number {\n\t\treturn this.sideLength ** 2;\n\t}\n}\n\n// Create instances of Circle and Square\nconst circle = new Circle(5);\nconst square = new Square(4);\n\n// Calculate and log areas\nconsole.log("Circle Area:", circle.calculateArea()); // Output: Circle Area: 78.53981633974483\nconsole.log("Square Area:", square.calculateArea()); // Output: Square Area: 16',
    'abstract class with constructor example': 'abstract class Shape {\n\tconstructor(public color: string) {}\n\n\tabstract calculateArea(): number;\n}\n\nclass Circle extends Shape {\n\tradius: number;\n\n\tconstructor(radius: number, color: string) {\n\t\tsuper(color);\n\t\tthis.radius = radius;\n\t}\n\n\tcalculateArea(): number {\n\t\treturn Math.PI * this.radius ** 2;\n\t}\n}\n\nclass Square extends Shape {\n\tsideLength: number;\n\n\tconstructor(sideLength: number, color: string) {\n\t\tsuper(color);\n\t\tthis.sideLength = sideLength;\n\t}\n\n\tcalculateArea(): number {\n\t\treturn this.sideLength ** 2;\n\t}\n}\n\n// Create instances of Circle and Square\nconst circle = new Circle(5, "red");\nconst square = new Square(4, "blue");\n\n// Log color and area of each shape\nconsole.log("Circle - Color:", circle.color, "Area:", circle.calculateArea());\nconsole.log("Square - Color:", square.color, "Area:", square.calculateArea());',
    'private modifier example': 'class BankAccount {\n\tprivate balance: number;\n\n\tconstructor(initialBalance: number) {\n\t\tthis.balance = initialBalance;\n\t}\n\n\tdeposit(amount: number): void {\n\t\tthis.balance += amount;\n\t}\n\n\twithdraw(amount: number): void {\n\t\tif (amount <= this.balance) {\n\t\t\tthis.balance -= amount;\n\t\t} else {\n\t\t\tconsole.log("Insufficient funds!");\n\t\t}\n\t}\n\n\tgetBalance(): number {\n\t\treturn this.balance;\n\t}\n}\n\n// Create an instance of BankAccount\nconst account = new BankAccount(1000);\n\n// Try to access the private property directly (will result in a compilation error)\n// console.log("Balance:", account.balance);\n\n// Perform operations using public methods\naccount.deposit(500);\naccount.withdraw(200);\n\n// Access the balance using the public method\nconsole.log("Current Balance:", account.getBalance());',
    'nominative and structural type systems example': `
    // Nominative Type System Example
    class Animal {
        name: string;
    }
    
    class Dog extends Animal {
        breed: string;
    }
    
    const myDog: Dog = new Dog();
    const myAnimal: Animal = myDog; // Error: Type 'Dog' is not assignable to type 'Animal'.
    
    
    // Structural Type System Example
    interface AnimalStructural {
        name: string;
    }
    
    interface DogStructural {
        name: string;
        breed: string;
    }
    
    const myDogStructural: DogStructural = { name: "Buddy", breed: "Labrador" };
    const myAnimalStructural: AnimalStructural = myDogStructural; // No error, structures are compatible.
    `,
    'protected class example': `
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    public bark(): void {
        console.log("Woof! Woof!");
        this.makeSound(); // Accessing protected method from the base class
    }

    public displayInfo(): void {
        console.log(\`Name: \${this.name}, Breed: \${this.breed}\`);
    }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.bark(); // Outputs: Woof! Woof! \n Animal makes a sound
myDog.displayInfo(); // Outputs: Name: Buddy, Breed: Labrador
    `,
    'Protected class example': `
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    public bark(): void {
        console.log("Woof! Woof!");
        this.makeSound(); // Accessing protected method from the base class
    }

    public displayInfo(): void {
        console.log(\`Name: \${this.name}, Breed: \${this.breed}\`);
    }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.bark(); // Outputs: Woof! Woof! \n Animal makes a sound
myDog.displayInfo(); // Outputs: Name: Buddy, Breed: Labrador
    `,
    // Add more snippets as needed
};
// Friendly Messages
const friendlyMessages = [
    "Awesome! Let's generate some TypeScript magic!",
    "Great choice! What TypeScript code shall we create today?",
    "You're on a coding adventure! What code should I generate?",
    "Ready to rock with TypeScript? Tell me your code idea!",
    "Exciting times! What TypeScript masterpiece do you have in mind?",
];
// User Interaction
async function getUserInput() {
    const response = await inquirer.prompt({
        type: 'input',
        name: 'codeDescription',
        message: chalk.green('Welcome to Hif-Code Generator!\n') + chalk.cyan(getRandomFriendlyMessage() + '\nHi, I\'m Hif. Tell me what code you want to generate in TypeScript:'),
    });
    return response.codeDescription;
}
// Get a random friendly message
function getRandomFriendlyMessage() {
    const randomIndex = Math.floor(Math.random() * friendlyMessages.length);
    return friendlyMessages[randomIndex];
}
// Code Generation Logic
async function generateCode() {
    const userDescription = await getUserInput();
    const processedInput = processInput(userDescription);
    let generatedCode = chalk.yellow('Code not found.');
    for (const [description, code] of Object.entries(codeSnippets)) {
        const snippetTokens = processInput(description);
        if (snippetTokens.every(token => processedInput.includes(token))) {
            generatedCode = chalk.blue('Generated Code:\n') + code;
            break;
        }
    }
    console.log(generatedCode);
    // Display PNG image in color
    // example 1 
    // const imagePath = 'hif.png'; // Update the path accordingly
    // interface ImageOptions {
    //     width?: string | number;
    //     height?: string | number;
    //     preserveAspectRatio?: boolean;
    //     maxWidth?: number;
    //     maxHeight?: number; // Add this line if you intend to use maxHeight
    // }
    // const imageOptions: ImageOptions = {
    //     maxWidth: 80, // Set the maximum width for the image
    //     maxHeight: 40, // Set the maximum height for the image
    // };
    // const imageBuffer = await terminalImage.file(imagePath, imageOptions).catch((error: Error) => {
    //     console.error(chalk.red(`Error loading image: ${error.message}`));
    //     return null;
    // });
    // if (imageBuffer) {
    //     console.log(imageBuffer);
    // }
    // example 2
    // const imageBuffer = await terminalImage.file('hif.png'); // Replace with the actual path of your PNG image
    // console.log(imageBuffer);
    const { options } = await inquirer.prompt({
        type: 'list',
        name: 'options',
        message: chalk.cyan('Options:'),
        choices: ['Continue', 'Exit'],
    });
    if (options === 'Continue') {
        console.log(chalk.green(getRandomFriendlyMessage()));
        await generateCode();
    }
    else {
        console.log(chalk.yellow('Goodbye! Feel free to ask me anytime.'));
    }
}
// Welcome Animation
animation.rainbow('Welcome to Hif-Code Generator!\n');
// ASCII Art Text
console.log(chalk.yellow(figlet.textSync('TypeScript Generator', { horizontalLayout: 'full' })));
// Boxed Text
console.log(boxen(chalk.green('Let\'s generate some TypeScript code!'), { padding: 1, borderColor: 'cyan' }));
// Spinner Animation
const spinner = ora({
    text: 'Loading...',
    spinner: cliSpinners.dots,
}).start();
// Simulate some async operation
setTimeout(() => {
    spinner.stop();
    console.log(chalk.blue('Ready for code generation!'));
    // Run the Code Generation
    generateCode();
}, 2000);
// Random Color
const randomTextColor = randomColor();
console.log(chalk.hex(randomTextColor)('This is some random colored text!'));
