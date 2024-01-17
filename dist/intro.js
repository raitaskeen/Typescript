"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
const message = greet("TypeScript");
console.log(message);
function calculateArea(length, width) {
    return length * width;
}
const area = calculateArea(10, 5);
console.log(`Area of the rectangle: ${area}`);
function greetUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
const newUser = { name: "Alice", age: 30 };
const greetings = greetUser(newUser);
console.log(greetings);
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} is starting.`);
    }
}
class ElectricCar extends Car {
    charge() {
        console.log(`${this.brand} is charging.`);
    }
}
const myCar = new ElectricCar("Tesla");
myCar.start();
myCar.charge();
