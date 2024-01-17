// main.ts
interface User {
    name: string;
    age: number;
  }
  
  function greetingsUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
  }
  
  const newgreetUser: User = { name: "Alice", age: 30 };
  const greetingss = greetingsUser(newgreetUser);
  console.log(greetingss);
  