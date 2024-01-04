import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fule = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fule - 25;
        this.fule = fuel;
    }
    fuelIncrease() {
        this.fule = 100;
    }
}
class Opponent {
    name;
    fule = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fule - 25;
        this.fule = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// GAther Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton   
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)}vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For your Life..."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (p1.fule <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (o1.fule <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fule is ${p1.fule}`));
        }
        if (ask.opt == "Run For your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
            process.exit();
        }
    }
    // assassin
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(p1.name)}vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For your Life..."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (p1.fule <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (o1.fule <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fule is ${p1.fule}`));
        }
        if (ask.opt == "Run For your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
            process.exit();
        }
    }
    // zombie
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(p1.name)}vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For your Life..."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (p1.fule <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fule}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fule}`));
                if (o1.fule <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fule is ${p1.fule}`));
        }
        if (ask.opt == "Run For your Life...") {
            console.log(chalk.red.bold.italic("You Loose, Bettur Luck Next Time"));
            process.exit();
        }
    }
} while (true);
