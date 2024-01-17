// main.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  // function parameters
  function calculate(length: number, width: number): number {
    return length * width;
  }

  const area = calculate(10, 5);
  console.log(`Area of the rectangle: ${area}`);
    // Output: Area of the rectangle: 50


// 3rd example
//interfaces
// main.ts
interface User {
    name: string;
    age: number;
  }
  
  function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
  }
  
  const newUser: User = { name: "Alice", age: 30 };
  const greetings = greetUser(newUser);
  console.log(greetings);
    // Output: Hello, Alice! You are 30 years old.
  
  //4th example
  //classes and inheritance
  // main.ts
class Car {
    constructor(public brand: string) {}
  
    start(): void {
      console.log(`${this.brand} is starting.`);
    }
  }
  
  class ElectricCar extends Car {
    charge(): void {
      console.log(`${this.brand} is charging.`);
    }
  }
  
  const myCar = new ElectricCar("Tesla");
  myCar.start();
  myCar.charge();
  