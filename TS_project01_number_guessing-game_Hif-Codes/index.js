#!/usr/bin/env node
import inquirer from "inquirer";
let rounds = 3; // You can customize the number of rounds
let score = 0;
for (let round = 1; round <= rounds; round++) {
    const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
    const { userGuess } = await inquirer.prompt({
        type: "number",
        name: "userGuess",
        message: `Round ${round}: Guess the number (between 1 and 10):`
    });
    if (userGuess === systemGeneratedNo) {
        console.log("Congratulations! You guessed it right.");
        score++;
    }
    else {
        console.log(`Oops! The correct number was ${systemGeneratedNo}. Better luck next time!`);
    }
}
console.log(`Game Over! Your score is ${score}/${rounds}`);
