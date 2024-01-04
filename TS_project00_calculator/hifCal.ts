#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const operators = ["addition", "subtraction", "multiplication", "division"];

const calculator = async () => {
  const { operator, numberOne, numberTwo } = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: chalk.cyan("Select an operation:"),
      choices: operators,
    },
    {
      type: "number",
      name: "numberOne",
      message: chalk.yellow("Enter the first number:"),
    },
    {
      type: "number",
      name: "numberTwo",
      message: chalk.yellow("Enter the second number:"),
    },
  ]);

  let result: number;

  switch (operator) {
    case "addition":
      result = numberOne + numberTwo;
      break;
    case "subtraction":
      result = numberOne - numberTwo;
      break;
    case "multiplication":
      result = numberOne * numberTwo;
      break;
    case "division":
      result = numberTwo !== 0 ? numberOne / numberTwo : NaN;
      break;
    default:
      result = NaN;
      break;
  }

  if (isNaN(result)) {
    console.log(chalk.red("Error: Invalid operation or division by zero."));
  } else {
    console.log(chalk.green(`Result: ${numberOne} ${operator} ${numberTwo} = ${result}`));
  }
};

const runCalculator = async () => {
  console.log(chalk.yellow(`
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|  
`));

  do {
    await calculator();

    const { restart } = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: chalk.blue("Do you want to perform another calculation? (y/n):"),
    });

    if (restart.toLowerCase() !== "y") {
      console.log(chalk.bold.green("Thank you for using the calculator. Goodbye!"));
      break;
    }
  } while (true);
};

runCalculator();
