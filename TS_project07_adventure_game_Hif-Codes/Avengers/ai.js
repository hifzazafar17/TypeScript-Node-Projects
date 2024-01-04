import chalk from "chalk";
import inquirer from "inquirer";
const asciiArt = `
.... .... ... .... .... ........ .... .... ... .... .... ... .... .... ... .... .... ... .... .... 
....................................................................................................
....................................................................................................
.........................................................           ................................
... .... .... ... .....................................              ............. ... .... .... ...
 .... .... ... .... .... ........ ......::::--=======:.             ... ... .... .... ... .... .... 
..................................::-+*#############+:              ................................
..............................:-+##################*:               ::..............................
..........................:-+################***##*-                =*#*-:..........................
... .... ...............-*###########**+=:..  .-#*-.                =*####*-............... .... ...
 .... .... ... .... .:+##########*+:.        .:#*=.                 =*#######*-...... ... .... .... 
...................:*#########+:.           .:*#=.                  =*#########*-...................
.................:*########*:          .....-*#+.                   =*#+#########*-.................
 .... .... ... .*########-.         .:=*######+.                    =*#:.:*########*:.... .... .... 
... .... .... +#######*-.       ..=##########*.         -.          =*#:   .+########*..... .... ...
............:*######*-..     ..+############*.         :*.          =*#:    .:+########-............
...........=*######+..      :*##############:         .*#.          =*#:      .-*#######=...........
..........=######*-.      -*###############:         .+##.          =*##+.     ..+#######+..........
 .... ...+######*:.     :+################-          -*##.          =*###*=.     .=#######+:.. .... 
........=######*.     .=*################-.         -*###.          =*#####+:     .-*######+........
.......=######*.     .+#################=.         :+####.          =*######*-     .-#######=.......
......-*#####*.     :+#################=.         .=#####.          =*#######*-.    .=######*-......
.....:+######:     .+#################+..        .=######.          =*########*-.    .+######*:.....
 ....-######-.    .=#################+:.        .-*######.          =*#########*:     .#######=.... 
....:+#####*..   .-#################+:.         :*#######.          =*##########+.     =######*:....
....-######-.    .+################*:.         .+########.          =*###########-.    .*######=....
....+#####*:.   .-################*-.         .=#########.          =*###########+.    .=######+:...
....*#####+.    .+###############*-.         .-##########*-.        =*############:.   .:######*:...
 ..:######=.    .*##############*=.         .:*##########*#*-.      =*############-.   .:*######-.. 
...:######-.   ..###############=.          .*###########.-*#+:.    =*############=.    .*######-...
...:######-.   .:##############+.           +############...=*#+:.  =*############=.    .+######-...
...:######-.   ..#############+.           :=============.   .=*#+:.=*############=.    .*######-...
...:######=.    .*###########*.                                .=*#++#############-.   .:#######-...
 ..:*#####+.    .+##########*.                                   .=*##############:.   .-#######:.. 
....+#####*:.   .-#########*.                                      .=*###########+.    .=######+:...
....=######-.    .+#######*:.                                      ..=###########-.    .*######=....
....:*#####*..   .-######*:.                                     .:+############+.     -######*-....
.....=######-.    .=#####-.           ...................     ..-*#**##########*:     .*######+:....
 ....:*######:     .+###-.           .+#################=   ..=*#+:.+#########*-.    .+######*-.... 
......=######*.    .:*#=.           .=##################= .:+##+:  .+########*=.    .-#######=......
.......=######*.  ..+#=.           .-###################+-##*+.    .+#######*-     .-#######+:......
.......:+######*...=#+.           .-*######################+.      .+######*:     .-*######*:.......
........:+######*:=#+:           .:+#####################=..........+#####=.     .=#######*:........
 .... ...:+########*:            .+#####################################+.      .+#######*:... .... 
...........+######*:            .=####################################+.      .-*#######*:..........
............+####*-.           .-##################################*-..      :+########+............
 .... .... ..:##*-.           .:#***############################*-...      .+#########-.. .... .... 
...............=-.           .:**-...:=*####################+-...       .:+#########+:..............
.................            .**-.     .....:-==++++==-:....          .=*#########+:................
...............              +#+.                                  .=*##########+:..................
...............             =####*+:.                         ..-+*###########+:....................
 .... .... ...             -#########**+=-..           ..:-=+**############*-:.. .... ... .... .... 
................. .........+#################**********#################*=:.........................
.............................:=*####################################*+-.............................
.................................-=+*##########################*+=-:................................
......................................::-==++**######***+==-::......................................
 .... .... ... .... .... ........ .... .... ... .... .... ... .... .... ... .... .... ... .... .... 
....................................................................................................
....................................................................................................
....................................................................................................
 `;
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
async function main() {
    console.log(chalk.bold.red(asciiArt)); // Display ASCII art
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please enter your Name:",
    });
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select your Opponent",
        choices: ["Thanos", "Loki", "Ultron", "Infinity Gauntlet Challenge"],
    });
    // Gather Data
    let p1 = new Player(player.name);
    let o1 = new Opponent(opponent.select);
    do {
        if (opponent.select === "Thanos") {
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.magentaBright(o1.name)}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drink Portion", "Run For your Life..."],
            });
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Lose. Better luck next time."));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            else if (ask.opt === "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
            }
            else if (ask.opt === "Run For your Life...") {
                console.log(chalk.red.bold.italic("You chose to run. Better luck next time."));
                process.exit();
            }
        }
        else if (opponent.select === "Loki") {
            // Logic for Loki
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.magentaBright(o1.name)}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drink Portion", "Run For your Life..."],
            });
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Lose. Better luck next time."));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            else if (ask.opt === "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
            }
            else if (ask.opt === "Run For your Life...") {
                console.log(chalk.red.bold.italic("You chose to run. Better luck next time."));
                process.exit();
            }
        }
        else if (opponent.select === "Ultron") {
            // Logic for Ultron
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.magentaBright(o1.name)}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drink Portion", "Run For your Life..."],
            });
            if (ask.opt === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Lose. Better luck next time."));
                        process.exit();
                    }
                }
                else {
                    o1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                    if (o1.fuel <= 0) {
                        console.log(chalk.green.bold.italic("You Win!"));
                        process.exit();
                    }
                }
            }
            else if (ask.opt === "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion. Your fuel is ${p1.fuel}`));
            }
            else if (ask.opt === "Run For your Life...") {
                console.log(chalk.red.bold.italic("You chose to run. Better luck next time."));
                process.exit();
            }
        }
        else if (opponent.select === "Infinity Gauntlet Challenge") {
            console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.magenta("Infinity Gauntlet")}`);
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attempt to Collect Stones", "Fight Guardians of the Stones", "Retreat"],
            });
            if (ask.opt === "Attempt to Collect Stones") {
                console.log(chalk.yellow.bold.italic("You embark on a quest to collect the Infinity Stones."));
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.magenta("The Infinity Gauntlet resists your attempt."));
                    console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Lose. Better luck next time."));
                        process.exit();
                    }
                }
                else {
                    console.log(chalk.bold.magenta("You successfully collect a few Infinity Stones!"));
                    console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                }
            }
            else if (ask.opt === "Fight Guardians of the Stones") {
                console.log(chalk.yellow.bold.italic("You confront powerful guardians protecting the Infinity Stones."));
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.magenta("The guardians overwhelm you in battle."));
                    console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Lose. Better luck next time."));
                        process.exit();
                    }
                }
                else {
                    console.log(chalk.bold.magenta("You defeat the guardians and gain control of the Infinity Stones!"));
                    console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                }
            }
            else if (ask.opt === "Retreat") {
                console.log(chalk.red.bold.italic("You wisely choose to retreat from the dangerous quest."));
                process.exit();
            }
        }
        // Similar logic can be applied for other opponents
        // Customize the choices and outcomes based on the selected opponent
    } while (true);
}
main();
