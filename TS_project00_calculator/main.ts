#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { radar } from "chalk-animation";


const sleep =()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
    let neonTitle = chalkAnimation.neon("Let's Start Calculator.");
    await sleep();
    neonTitle.stop();
    console.log(chalk.blueBright(` _____________________
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
|_____________________|`))
}

await welcome();

async function AskQuestion(){
    await inquirer.prompt([
        // this is an arrey of questions
         // Ask the user to input their first number

             // Offer a list of operations for the user to choose from

    {
        type: "list",
        name: "Operator",
        choices: ["addition","subtraction","multiplication","division"],
        message: "Select an operation or Percentage:"
    },

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


    ])    
        .then((answers)=>{

    if(answers.Operator == "addition" ){
        console.log(chalk.green(`${answers.numberOne} + ${answers.numberTwo} = ${answers.numberOne + answers.numberTwo}`));
    }
    else if(answers.Operator == "subtraction"){
        console.log(chalk.green(`${answers.numberOne} - ${answers.numberTwo} = ${answers.numberOne - answers.numberTwo}`));
    }
    else if(answers.Operator == "multiplication"){
        console.log(chalk.green(`${answers.numberOne} * ${answers.numberTwo} = ${answers.numberOne * answers.numberTwo}`));
    }
    else if(answers.Operator == "division"){
        console.log(chalk.green(`${answers.numberOne} / ${answers.numberTwo} = ${answers.numberOne / answers.numberTwo}`));
    }
        })

};

// AskQuestion();

async function startAgain(){
    do{
        await AskQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name:"restart",
            message:"Do you want to continue? Press y or n:"
        })
    }while(again.restart == 'y' || again.restart == 'y' || again.restart == 'yes' || again.restart == 'Yes')
}

startAgain();