import * as readlineSync from 'readline-sync';

function main() {
    console.log("Welcome to the Logic Learning Program!");

    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const { question, expectedAnswer } = generateQuestion();
        console.log(`Question: ${question}`);

        const userAnswer: number = getUserInput();

        console.log(`Your answer: ${userAnswer}`); // Display the user's answer

        if (userAnswer === expectedAnswer) {
            console.log("Correct!");
            score += 1;
        } else {
            console.log(`Incorrect. The correct answer is: ${expectedAnswer}`);
        }

        console.log("---------------------");
    }

    console.log(`Quiz complete! Your final score is: ${score}/5`);
}

function generateQuestion(): { question: string, expectedAnswer: number } {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operator = Math.random() < 0.5 ? "+" : "-";

    const question = `${num1} ${operator} ${num2}`;

    const expectedAnswer = operator === "+" ? num1 + num2 : num1 - num2;

    return { question, expectedAnswer };
}

function getUserInput(): number {
    while (true) {
        const userInput: string = readlineSync.question("Your answer: ");

        const parsedInput: number = parseInt(userInput);

        if (!isNaN(parsedInput)) {
            return parsedInput;
        } else {
            console.log("Invalid input. Please enter a number.");
        }
    }
}

main();
