// TypeScript types

// numeric types
let decimal: number = 6;
let age: number = 10;
let sales: number = 123_456_789;

//string types
let course:string = "TypeScript";
let playerName: string = "Taskeen";
let firstName: string = "Taskeen";

//boolean types
let isBeginner: boolean = true;
let isPlaying: boolean = true;
let isLive: boolean = true;

//any type
let level;
let dynamicValue: any = "I can be any type!";
dynamicValue = 10;

//array types
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Taskeen", "John", "Doe"];
let values: any[] = [1, "John", true];

//tuple types
let person: [string, number] = ["John", 123];
let employee: [string, number, boolean] = ["John", 123, true];
let coordinates: [number, number] = [10, 20];

//object types
let person1: object = {
  name: "John",
  age: 30,
};

let person2: object = {
  name: "John",
  age: 30,
  address: "123 Main St",
};

let player: { name: string, score: number } = { name: "Taskeen", score: 100 };

//enum types
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Blue;


enum Direction { Up = 1, Down, Left, Right }

//union types
let unionValue: string | number = "Taskeen";


//literal types
let literalValue: "Taskeen" | "John" | "Doe";

//type aliases
type PlayerArray = Array<string>;
type PlayerTuple = [string, number];
let players: PlayerArray = ["Altuve", "Corerra", "Bregman"];

//function types
function sayHello(): void {
  console.log("Hello!");
}

function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//void type
let unusable: void = undefined;

function logMessage(): void {
    console.log("This function doesn't return a value.");
}

//never type
function neverReturns(): never {
    throw new Error("An error!");
}

//null and undefined types
let u: undefined = undefined;
let n: null = null;

//unknown type
let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;
let s2: string = vUnknown as string;


