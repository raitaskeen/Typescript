"use strict";
let userold = 25;
let productPrice = 49.99;
let quantity = 3;
let userName = "Alice";
let productName = "Laptop";
let greeting = "Hello, TypeScript!";
let isActive = true;
let isUserLoggedIn = false;
let isProductAvailable = true;
let scores = [90, 85, 95, 88];
let colors = ["Red", "Green", "Blue"];
let temperatures = [25.5, 28, 22.7];
let coordinates = [42, 30];
let dimensions = [10, 20, 5];
let rgbColor = [255, 0, 0];
let userDetail = { name: "Alice", age: 25 };
let productInfo = { name: "Laptop", price: 999.99, inStock: true };
let employee = { id: 101, name: "Bob", department: "HR" };
let dynamicData = "I can be any type!";
let dynamicNumber = 42;
let dynamicArray = [1, "two", true];
let nullValue = null;
let nullObject = null;
let nullVariable = null;
let undefinedValue = undefined;
let undefinedVariable = undefined;
let undefinedArray = [undefined, undefined];
let userChoices = "Option A";
let result = 42;
let stat = true;
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
let userStatus = Status.Active;
let productStatus = Status.Inactive;
let orderStatus = Status.Pending;
function logMessage() {
    console.log("This function doesn't return a value.");
}
function greetingUser() {
    console.log("Hello, user!");
}
function displayError() {
    console.error("An error occurred!");
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("This loop never ends!");
    }
}
function unreachableCode() {
    throw new Error("This code is never reached.");
}
let uniqueSymbol1 = Symbol("unique1");
let uniqueSymbol2 = Symbol("unique2");
let uniqueSymbol3 = Symbol("unique3");
let bigNumber1 = 100n;
let bigNumber2 = 999n;
let bigNumber3 = 42n;
let redColor = "Red";
let greenColor = "Green";
let blueColor = "Blue";
let userLocation = { x: 10, y: 20 };
let productPosition = { x: 5, y: 15 };
let destination = { x: 30, y: 40 };
