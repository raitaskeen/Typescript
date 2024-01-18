// Define a class representing a person
class Person {
    // Class properties
    private name: string;
    private age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to get person's details
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Function to greet a person
function greet(person: Person): void {
    console.log(`Hello, ${person.getDetails()}!`);
}

// Enum representing days of the week
enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

// Interface representing a shape
interface Shape {
    // Method to calculate area
    calculateArea(): number;
}

// Class representing a circle implementing the Shape interface
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Implementation of calculateArea method
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Type alias for a function that takes two numbers and returns a number
type MathOperation = (a: number, b: number) => number;

// Function to perform a math operation
const performMathOperation: MathOperation = (a, b) => a + b;

// Create a person object
const john = new Person("John Doe", 25);

// Greet the person
greet(john);

// Use the DaysOfWeek enum
const today: DaysOfWeek = DaysOfWeek.Wednesday;
console.log(`Today is ${DaysOfWeek[today]}`);

// Create a circle
const myCircle = new Circle(5);
console.log(`The area of the circle is: ${myCircle.calculateArea()}`);

// Use the MathOperation type alias
const results = performMathOperation(10, 20);
console.log(`Result of the math operation: ${results}`);