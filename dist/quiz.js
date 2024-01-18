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
    console.log("Welcome to the True or False Quiz!");
    let score = 0;
    const questions = [
        { text: "JavaScript is a statically typed language.", correctAnswer: false },
        { text: "TypeScript is a superset of JavaScript.", correctAnswer: true },
        { text: "Node.js is a server-side JavaScript runtime.", correctAnswer: true },
        { text: "React is a back-end framework.", correctAnswer: false },
        { text: "HTML stands for HyperText Markup Language.", correctAnswer: true },
    ];
    for (const { text, correctAnswer } of questions) {
        console.log(`Question: ${text}`);
        const userAnswer = getTrueOrFalseInput();
        console.log(`Your answer: ${userAnswer ? 'True' : 'False'}`);
        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            score += 1;
        }
        else {
            console.log(`Incorrect. The correct answer is: ${correctAnswer ? 'True' : 'False'}`);
        }
        console.log("---------------------");
    }
    console.log(`Quiz complete! Your final score is: ${score}/${questions.length}`);
}
function getTrueOrFalseInput() {
    while (true) {
        const userInput = readlineSync.question("Your answer (True/False): ").toLowerCase();
        if (userInput === 'true') {
            return true;
        }
        else if (userInput === 'false') {
            return false;
        }
        else {
            console.log("Invalid input. Please enter 'True' or 'False'.");
        }
    }
}
main();
