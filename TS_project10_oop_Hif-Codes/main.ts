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

// Create instances of the classes
const myCircle = new Circle('red', 5);
const myRectangle = new Rectangle('blue', 4, 6);

// Display information about the shapes
myCircle.displayInfo();
myRectangle.displayInfo();
