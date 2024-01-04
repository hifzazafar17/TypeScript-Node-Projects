// PIAIC_project04_currency_converter
// Import the 'inquirer' library for handling user input
import inquirer from "inquirer";
// Object to store conversion rates
let Conversion = {
    "PKR": {
        "USD": 0.004434589800443458980044345898,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
// Prompt the user for input using 'inquirer'
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    }
]);
// Destructure the user's choices
const { from, to, amount } = answer;
// Check if all necessary inputs are provided
if (from && to && amount) {
    // Perform the conversion using the provided rates and amount
    let result = Conversion[from][to] * amount;
    // Display the result to the user
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    // Display an error message for invalid inputs
    console.log("Invalid inputs");
}
