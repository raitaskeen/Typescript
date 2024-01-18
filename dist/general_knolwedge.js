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
    console.log("Welcome to the General Knowledge Quiz!");
    let score = 0;
    const questions = [
        {
            text: "What is the capital of France?",
            options: ["Berlin", "Paris", "Madrid", "Rome"],
            correctAnswerIndex: 1,
        },
        {
            text: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswerIndex: 0,
        },
        {
            text: "In which year did the Titanic sink?",
            options: ["1905", "1912", "1920", "1931"],
            correctAnswerIndex: 1,
        },
        {
            text: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            correctAnswerIndex: 1,
        },
        {
            text: "What is the largest mammal in the world?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
            correctAnswerIndex: 2,
        },
    ];
    for (const { text, options, correctAnswerIndex } of questions) {
        console.log(`Question: ${text}`);
        options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
        const userAnswerIndex = getUserInput(options.length);
        console.log(`Your answer: ${options[userAnswerIndex - 1]}`);
        if (userAnswerIndex - 1 === correctAnswerIndex) {
            console.log("Correct!");
            score += 1;
        }
        else {
            console.log(`Incorrect. The correct answer is: ${options[correctAnswerIndex]}`);
        }
        console.log("---------------------");
    }
    console.log(`Quiz complete! Your final score is: ${score}/${questions.length}`);
}
function getUserInput(maxOptions) {
    while (true) {
        const userInput = readlineSync.question(`Enter the number of your answer (1-${maxOptions}): `);
        const userAnswerIndex = parseInt(userInput);
        if (!isNaN(userAnswerIndex) && userAnswerIndex >= 1 && userAnswerIndex <= maxOptions) {
            return userAnswerIndex;
        }
        else {
            console.log(`Invalid input. Please enter a number between 1 and ${maxOptions}.`);
        }
    }
}
main();
