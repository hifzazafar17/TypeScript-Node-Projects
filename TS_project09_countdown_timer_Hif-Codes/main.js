// // simple App countdown timer
// import { differenceInSeconds } from "date-fns";
// import inquirer from "inquirer"
import inquirer from "inquirer";
class Timer {
    intervalId = null;
    remainingSeconds = 0;
    async run() {
        while (true) {
            const input = await this.getUserInput();
            await this.startTimer(input);
            const continueOption = await this.continuePrompt();
            if (!continueOption) {
                console.log("Exiting timer.");
                break;
            }
        }
    }
    async getUserInput() {
        const res = await inquirer.prompt({
            type: "number",
            name: "userInput",
            message: "Please enter the amount of seconds: ",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid number";
                }
                else if (input > 60) {
                    return "Seconds must be less than or equal to 60";
                }
                else {
                    return true;
                }
            },
        });
        return res.userInput;
    }
    displayTime(minutes, seconds) {
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }
    async startTimer(seconds) {
        return new Promise((resolve) => {
            this.remainingSeconds = seconds || 60;
            this.intervalId = setInterval(() => {
                this.remainingSeconds--;
                if (this.remainingSeconds <= 0) {
                    this.stopTimer();
                    console.log("Time has expired");
                    resolve();
                }
                else {
                    const minutes = Math.floor(this.remainingSeconds / 60);
                    const seconds = this.remainingSeconds % 60;
                    this.displayTime(minutes, seconds);
                }
            }, 1000);
        });
    }
    async continuePrompt() {
        const { continueOption } = await inquirer.prompt({
            type: "confirm",
            name: "continueOption",
            message: "Do you want to continue?",
            default: true,
        });
        if (!continueOption) {
            this.stopTimer();
        }
        return continueOption;
    }
    stopTimer() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
async function main() {
    const timer = new Timer();
    await timer.run();
}
main();
