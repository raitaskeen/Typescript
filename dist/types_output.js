"use strict";
let userAge = 10;
let Player = "John";
let isUserPlaying = true;
let userScores = [1, 2, 3, 4, 5];
let userCoordinates = [10, 20];
let userDetails = { name: "John", score: 100 };
let dynamicInfo = "I can be any type!";
let nullData = null;
let undefinedData = undefined;
let userChoice = "Hello";
var UserColor;
(function (UserColor) {
    UserColor[UserColor["Red"] = 0] = "Red";
    UserColor[UserColor["Green"] = 1] = "Green";
    UserColor[UserColor["Blue"] = 2] = "Blue";
})(UserColor || (UserColor = {}));
let userFavoriteColor = UserColor.Blue;
function printInfo() {
    console.log("This function doesn't return a value.");
}
function reportError(message) {
    throw new Error(message);
}
console.log("User Age:", userAge);
console.log("Player Name:", Player);
console.log("Is User Playing:", isUserPlaying);
console.log("User Scores:", userScores);
console.log("User Coordinates:", userCoordinates);
console.log("User Details:", userDetails);
console.log("Dynamic Info:", dynamicInfo);
console.log("Null Data:", nullData);
console.log("Undefined Data:", undefinedData);
console.log("User Choice:", userChoice);
console.log("User Favorite Color:", userFavoriteColor);
printInfo();
