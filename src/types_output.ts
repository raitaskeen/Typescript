// Number Type
let userAge: number = 10;

// String Type
let Player: string = "John";

// Boolean Type
let isUserPlaying: boolean = true;

// Array of Numbers Type
let userScores: number[] = [1, 2, 3, 4, 5];

// Tuple Type (an array with fixed elements and types)
let userCoordinates: [number, number] = [10, 20];

// Object Type with specific properties and types
let userDetails: { name: string, score: number } = { name: "John", score: 100 };

// Any Type (use with caution, allows dynamic typing)
let dynamicInfo: any = "I can be any type!";

// Null Type
let nullData: null = null;

// Undefined Type
let undefinedData: undefined = undefined;

// Union Type (can be a string or a number)
let userChoice: string | number = "Hello";

// Enum Type (a set of named constants)
enum UserColor {
    Red,
    Green,
    Blue
}
let userFavoriteColor: UserColor = UserColor.Blue;

// Void Type (represents the absence of a type, often used for functions with no return)
function printInfo(): void {
    console.log("This function doesn't return a value.");
}

// Never Type (represents a value that never occurs, often used for functions that throw errors)
function reportError(message: string): never {
    throw new Error(message);
}

// Outputting the values
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
printInfo(); // Void function
// reportError("An error occurred!"); // Never function
