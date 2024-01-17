"use strict";
function greetingsUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
const newgreetUser = { name: "Alice", age: 30 };
const greetingss = greetingsUser(newgreetUser);
console.log(greetingss);
