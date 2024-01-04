#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Function to simulate sleep
const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

// Function to display the welcome message
async function welcome() {
  let neonTitle = chalkAnimation.neon("Let's Start Calculator.");
  await sleep();
  neonTitle.stop();

  console.log(
    chalk.blueBright(`
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
|_____________________|`)
  );
}

// Function to ask questions and perform calculations
async function askQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      choices: ["addition", "subtraction", "multiplication", "division"],
      message: "Select an operation or Percentage:",
    },
    {
      type: "number",
      name: "numberOne",
      message: "Please tell me your first number:",
    },
    {
      type: "number",
      name: "numberTwo",
      message: "Now, your second number:",
    },
  ]);

  // Perform calculations based on the selected operation
  switch (answers.operator) {
    case "addition":
      console.log(chalk.green(`${answers.numberOne} + ${answers.numberTwo} = ${answers.numberOne + answers.numberTwo}`));
      break;
    case "subtraction":
      console.log(chalk.green(`${answers.numberOne} - ${answers.numberTwo} = ${answers.numberOne - answers.numberTwo}`));
      break;
    case "multiplication":
      console.log(chalk.green(`${answers.numberOne} * ${answers.numberTwo} = ${answers.numberOne * answers.numberTwo}`));
      break;
    case "division":
      console.log(chalk.green(`${answers.numberOne} / ${answers.numberTwo} = ${answers.numberOne / answers.numberTwo}`));
      break;
  }
}

// Function to restart the calculator
async function startAgain() {
    let again;
    do {
      await askQuestion();
      again = await inquirer.prompt({
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n:",
      });
    } while (again.restart.toLowerCase() === 'y' || again.restart.toLowerCase() === 'yes');
  }

// Main execution
(async () => {
  await welcome();
  await startAgain();
})();
