import * as readlineSync from 'readline-sync';

interface Question {
    text: string;
    options: string[];
    correctAnswerIndex: number;
}

function main() {
    console.log("Welcome to the General Knowledge Quiz!");

    let score = 0;

    const questions: Question[] = [
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

        const userAnswerIndex: number = getUserInput(options.length);

        console.log(`Your answer: ${options[userAnswerIndex - 1]}`); // Display the user's answer

        if (userAnswerIndex - 1 === correctAnswerIndex) {
            console.log("Correct!");
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer is: ${options[correctAnswerIndex]}`);
        }

        console.log("---------------------");
    }

    console.log(`Quiz complete! Your final score is: ${score}/${questions.length}`);
}

function getUserInput(maxOptions: number): number {
    while (true) {
        const userInput: string = readlineSync.question(`Enter the number of your answer (1-${maxOptions}): `);

        const userAnswerIndex: number = parseInt(userInput);

        if (!isNaN(userAnswerIndex) && userAnswerIndex >= 1 && userAnswerIndex <= maxOptions) {
            return userAnswerIndex;
        } else {
            console.log(`Invalid input. Please enter a number between 1 and ${maxOptions}.`);
        }
    }
}

main();
