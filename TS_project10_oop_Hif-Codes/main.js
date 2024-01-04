// Define a base class called Shape
class Shape {
    // Properties
    color;
    // Constructor
    constructor(color) {
        this.color = color;
    }
    // Method to get the area (to be implemented by subclasses)
    getArea() {
        return 0;
    }
    // Method to display information about the shape
    displayInfo() {
        console.log(`This is a ${this.color} shape.`);
    }
}
// Subclass: Circle
class Circle extends Shape {
    // Properties
    radius;
    // Constructor
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    // Implement the getArea method for circles
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    // Method to display information about the circle
    displayInfo() {
        super.displayInfo();
        console.log(`It is a circle with radius ${this.radius} and area ${this.getArea()}.`);
    }
}
// Subclass: Rectangle
class Rectangle extends Shape {
    // Properties
    width;
    height;
    // Constructor
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    // Implement the getArea method for rectangles
    getArea() {
        return this.width * this.height;
    }
    // Method to display information about the rectangle
    displayInfo() {
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
export {};
