import * as readlineSync from 'readline-sync';

interface Question {
    text: string;
    correctAnswer: boolean;
}

function main() {
    console.log("Welcome to the True or False Quiz!");

    let score = 0;

    const questions: Question[] = [
        { text: "JavaScript is a statically typed language.", correctAnswer: false },
        { text: "TypeScript is a superset of JavaScript.", correctAnswer: true },
        { text: "Node.js is a server-side JavaScript runtime.", correctAnswer: true },
        { text: "React is a back-end framework.", correctAnswer: false },
        { text: "HTML stands for HyperText Markup Language.", correctAnswer: true },
    ];

    for (const { text, correctAnswer } of questions) {
        console.log(`Question: ${text}`);

        const userAnswer: boolean = getTrueOrFalseInput();

        console.log(`Your answer: ${userAnswer ? 'True' : 'False'}`); // Display the user's answer

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer is: ${correctAnswer ? 'True' : 'False'}`);
        }

        console.log("---------------------");
    }

    console.log(`Quiz complete! Your final score is: ${score}/${questions.length}`);
}

function getTrueOrFalseInput(): boolean {
    while (true) {
        const userInput: string = readlineSync.question("Your answer (True/False): ").toLowerCase();

        if (userInput === 'true') {
            return true;
        } else if (userInput === 'false') {
            return false;
        } else {
            console.log("Invalid input. Please enter 'True' or 'False'.");
        }
    }
}

main();
