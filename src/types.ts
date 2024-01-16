// Number Type
let age: number = 10;

// String Type
let playerName: string = "Taskeen";

// Boolean Type
let isPlaying: boolean = true;

// Array of Numbers Type
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple Type (an array with fixed elements and types)
let coordinates: [number, number] = [10, 20];

// Object Type with specific properties and types
let player: { name: string, score: number } = { name: "Taskeen", score: 100 };

// Any Type (use with caution, allows dynamic typing)
let dynamicValue: any = "I can be any type!";

// Null Type
let nullValue: null = null;

// Undefined Type
let undefinedValue: undefined = undefined;

// Union Type (can be a string or a number)
let unionType: string | number = "Hello";

// Enum Type (a set of named constants)
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;

// Void Type (represents the absence of a type, often used for functions with no return)
function logMessage(): void {
    console.log("This function doesn't return a value.");
}

// Never Type (represents a value that never occurs, often used for functions that throw errors)
function throwError(message: string): never {
    throw new Error(message);
}

// Outputting the values
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
logMessage(); // Void function
// throwError("An error occurred!"); // Never function