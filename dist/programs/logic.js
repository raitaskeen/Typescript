"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function main() {
    console.log("Welcome to the Logic Learning Program!");
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const { question, expectedAnswer } = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = getUserInput();
        console.log(`Your answer: ${userAnswer}`);
        if (userAnswer === expectedAnswer) {
            console.log("Correct!");
            score += 1;
        }
        else {
            console.log(`Incorrect. The correct answer is: ${expectedAnswer}`);
        }
        console.log("---------------------");
    }
    console.log(`Quiz complete! Your final score is: ${score}/5`);
}
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? "+" : "-";
    const question = `${num1} ${operator} ${num2}`;
    const expectedAnswer = operator === "+" ? num1 + num2 : num1 - num2;
    return { question, expectedAnswer };
}
function getUserInput() {
    while (true) {
        const userInput = readlineSync.question("Your answer: ");
        const parsedInput = parseInt(userInput);
        if (!isNaN(parsedInput)) {
            return parsedInput;
        }
        else {
            console.log("Invalid input. Please enter a number.");
        }
    }
}
main();
