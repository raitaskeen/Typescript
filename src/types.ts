// Number Type
let userold: number = 25;
let productPrice: number = 49.99;
let quantity: number = 3;

// String Type
let userName: string = "Alice";
let productName: string = "Laptop";
let greeting: string = "Hello, TypeScript!";

// Boolean Type
let isActive: boolean = true;
let isUserLoggedIn: boolean = false;
let isProductAvailable: boolean = true;

// Array Type
let scores: number[] = [90, 85, 95, 88];
let colors: string[] = ["Red", "Green", "Blue"];
let temperatures: number[] = [25.5, 28, 22.7];

// Tuple Type
let coordinates: [number, number] = [42, 30];
let dimensions: [number, number, number] = [10, 20, 5];
let rgbColor: [number, number, number] = [255, 0, 0];

// Object Type
let userDetail: { name: string, age: number } = { name: "Alice", age: 25 };
let productInfo: { name: string, price: number, inStock: boolean } = { name: "Laptop", price: 999.99, inStock: true };
let employee: { id: number, name: string, department: string } = { id: 101, name: "Bob", department: "HR" };

// Any Type
let dynamicData: any = "I can be any type!";
let dynamicNumber: any = 42;
let dynamicArray: any[] = [1, "two", true];

// Null Type
let nullValue: null = null;
let nullObject: null = null;
let nullVariable: null = null;

// Undefined Type
let undefinedValue: undefined = undefined;
let undefinedVariable: undefined = undefined;
let undefinedArray: undefined[] = [undefined, undefined];

// Union Type
let userChoices: string | number = "Option A";
let result: number | boolean = 42;
let stat: string | boolean = true;

// Enum Type
enum Status {
    Active,
    Inactive,
    Pending
}
let userStatus: Status = Status.Active;
let productStatus: Status = Status.Inactive;
let orderStatus: Status = Status.Pending;

// Void Type
function logMessage(): void {
    console.log("This function doesn't return a value.");
}
function greetUser(): void {
    console.log("Hello, user!");
}
function displayError(): void {
    console.error("An error occurred!");
}

// Never Type
function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        console.log("This loop never ends!");
    }
}
function unreachableCode(): never {
    throw new Error("This code is never reached.");
}

// Symbol Type
let uniqueSymbol1: symbol = Symbol("unique1");
let uniqueSymbol2: symbol = Symbol("unique2");
let uniqueSymbol3: symbol = Symbol("unique3");

// Big Int Type
let bigNumber1: bigint = 100n;
let bigNumber2: bigint = 999n;
let bigNumber3: bigint = 42n;

// Literal Type
let redColor: "Red" = "Red";
let greenColor: "Green" = "Green";
let blueColor: "Blue" = "Blue";

// Type Aliases
type Point = { x: number, y: number };
let userLocation: Point = { x: 10, y: 20 };
let productPosition: Point = { x: 5, y: 15 };
let destination: Point = { x: 30, y: 40 };
