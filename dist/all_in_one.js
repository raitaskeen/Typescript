"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
function greets(person) {
    console.log(`Hello, ${person.getDetails()}!`);
}
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
const performMathOperation = (a, b) => a + b;
const john = new Person("John Doe", 25);
greets(john);
const today = DaysOfWeek.Wednesday;
console.log(`Today is ${DaysOfWeek[today]}`);
const myCircle = new Circle(5);
console.log(`The area of the circle is: ${myCircle.calculateArea()}`);
const results = performMathOperation(10, 20);
console.log(`Result of the math operation: ${results}`);
