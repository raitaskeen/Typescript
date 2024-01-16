"use strict";
let age = 10;
let playerName = "Taskeen";
let isPlaying = true;
let numbers = [1, 2, 3, 4, 5];
let coordinates = [10, 20];
let player = { name: "Taskeen", score: 100 };
let dynamicValue = "I can be any type!";
let nullValue = null;
let undefinedValue = undefined;
let unionType = "Hello";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
function logMessage() {
    console.log("This function doesn't return a value.");
}
function throwError(message) {
    throw new Error(message);
}
console.log("Age:", age);
console.log("Player Name:", playerName);
console.log("Is Playing:", isPlaying);
console.log("Numbers:", numbers);
console.log("Coordinates:", coordinates);
console.log("Player:", player);
console.log("Dynamic Value:", dynamicValue);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
console.log("Union Type:", unionType);
console.log("Favorite Color:", favoriteColor);
logMessage();
