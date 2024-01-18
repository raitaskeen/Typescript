// Define a class representing a person
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to get person's details
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
// Function to greet a person
function greet(person) {
    console.log("Hello, ".concat(person.getDetails(), "!"));
}
// Enum representing days of the week
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
// Class representing a circle implementing the Shape interface
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // Implementation of calculateArea method
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// Function to perform a math operation
var performMathOperation = function (a, b) { return a + b; };
// Create a person object
var john = new Person("John Doe", 25);
// Greet the person
greet(john);
// Use the DaysOfWeek enum
var today = DaysOfWeek.Wednesday;
console.log("Today is ".concat(DaysOfWeek[today]));
// Create a circle
var myCircle = new Circle(5);
console.log("The area of the circle is: ".concat(myCircle.calculateArea()));
// Use the MathOperation type alias
var results = performMathOperation(10, 20);
console.log("Result of the math operation: ".concat(results));
