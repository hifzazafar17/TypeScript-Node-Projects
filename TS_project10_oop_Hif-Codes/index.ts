import * as readline from 'readline';

// Define a base class called Shape
class Shape {
    // Properties
    protected color: string;

    // Constructor
    constructor(color: string) {
        this.color = color;
    }

    // Method to get the area (to be implemented by subclasses)
    getArea(): number {
        return 0;
    }

    // Method to display information about the shape
    displayInfo(): void {
        console.log(`This is a ${this.color} shape.`);
    }
}

// Subclass: Circle
class Circle extends Shape {
    // Properties
    private radius: number;

    // Constructor
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    // Implement the getArea method for circles
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    // Method to display information about the circle
    displayInfo(): void {
        super.displayInfo();
        console.log(`It is a circle with radius ${this.radius} and area ${this.getArea()}.`);
    }
}

// Subclass: Rectangle
class Rectangle extends Shape {
    // Properties
    private width: number;
    private height: number;

    // Constructor
    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Implement the getArea method for rectangles
    getArea(): number {
        return this.width * this.height;
    }

    // Method to display information about the rectangle
    displayInfo(): void {
        super.displayInfo();
        console.log(`It is a rectangle with width ${this.width}, height ${this.height}, and area ${this.getArea()}.`);
    }
}

// Function to display a menu and get user input
function displayMenu(): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        console.log('\n===== Menu =====');
        console.log('1. Create Circle');
        console.log('2. Create Rectangle');
        console.log('3. Exit');
        rl.question('Select an option (1-3): ', (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Function to handle user choices
async function handleUserChoice(choice: string): Promise<void> {
    switch (choice) {
        case '1':
            const circleRadius = parseFloat(await getInput('Enter circle radius: '));
            const circleColor = await getInput('Enter circle color: ');
            const newCircle = new Circle(circleColor, circleRadius);
            newCircle.displayInfo();
            break;
        case '2':
            const rectWidth = parseFloat(await getInput('Enter rectangle width: '));
            const rectHeight = parseFloat(await getInput('Enter rectangle height: '));
            const rectColor = await getInput('Enter rectangle color: ');
            const newRectangle = new Rectangle(rectColor, rectWidth, rectHeight);
            newRectangle.displayInfo();
            break;
        case '3':
            console.log('Exiting the program.');
            process.exit(0);
            break;
        default:
            console.log('Invalid choice. Please enter a number between 1 and 3.');
            break;
    }
}

// Function to get user input
function getInput(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Main program loop
async function main() {
    while (true) {
        const userChoice = await displayMenu();
        await handleUserChoice(userChoice);
    }
}

// Run the main program
main();
