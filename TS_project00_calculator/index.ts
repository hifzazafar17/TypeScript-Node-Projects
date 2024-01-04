#!/usr/bin/env node

// PIAIC_Batch51_Quater1
// Project_00_Calculator

// Import the 'inquirer' library to easily get input from the user

import inquirer from "inquirer";



// Prompt the user to enter their first and second numbers, as well as select an operation

const answers: {
    numberOne: number;
    numberTwo: number;
    Operator: string;
} = await inquirer.prompt([

    // Ask the user to input their first number

    {
        type: "number",
        name: "numberOne",
        message: "Please tell me your first number:"
    },

    // Ask the user to input their second number

    {
        type: "number",
        name: "numberTwo",
        message: "Now, your second number:"
    },

    // Offer a list of operations for the user to choose from

    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/", "%"],
        message: "Select an operation or Percentage:"
    }
]);

// Destructure the answers object for easy access to individual values

const { numberOne, numberTwo, Operator } = answers;

// Check if the user provided valid input for both numbers and selected an operation

if (numberOne !== undefined && numberTwo !== undefined && Operator) {
    let result: number = 0;

    // Perform the chosen operation based on the user's selection

    if (Operator === "+") {
        result = numberOne + numberTwo;
    } else if (Operator === "-") {
        result = numberOne - numberTwo;
    } else if (Operator === "*") {
        result = numberOne * numberTwo;
    } else if (Operator === "/") {
        result = numberOne / numberTwo;
    } else if (Operator === "%") {

        // Calculate the percentage of the first number in relation to the second

        result = (numberOne / numberTwo) * 100;
     }

    // Display the result to the user in a friendly message

    console.log("Great! Your result is:", result);
} else {

    // Notify the user if they provided invalid input

    console.log("Oops! Please enter valid numbers and choose an operation.");
}



// Exciting update from my TypeScript coding journey! 🚀👩‍💻 I've just completed my project 'project00_calculator' - a Simple Command Line Calculator. 💡🔢
// This project marks a significant milestone in my learning journey, allowing me to apply TypeScript concepts practically.