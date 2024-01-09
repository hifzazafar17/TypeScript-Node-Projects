import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";

// Customer class
class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;

    constructor(fName: string, lName: string, age: number, gender: string, mob: number, acc: number) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}

// Interface BankAccount
interface BankAccount {
    accNumber: number;
    balance: number;
}

// Class Bank
class Bank {
    customers: Customer[] = [];
    accounts: BankAccount[] = [];

    addCustomer(obj: Customer): void {
        this.customers.push(obj);
    }

    addAccount(obj: BankAccount): void {
        this.accounts.push(obj);
    }

    getCustomerByAccountNumber(accNumber: number): Customer | undefined {
        return this.customers.find((customer) => customer.accNumber === accNumber);
    }

    getAccountByAccountNumber(accNumber: number): BankAccount | undefined {
        return this.accounts.find((account) => account.accNumber === accNumber);
    }

    performTransaction(accNumber: number, amount: number, transactionType: string): void {
        const account = this.getAccountByAccountNumber(accNumber);

        if (!account) {
            console.log(chalk.red.bold.italic("Invalid Account Number"));
            return;
        }

        switch (transactionType) {
            case "withdraw":
                this.withdraw(account, amount);
                break;
            case "deposit":
                this.deposit(account, amount);
                break;
            default:
                console.log(chalk.red.bold.italic("Invalid Transaction Type"));
        }
    }

    private withdraw(account: BankAccount, amount: number): void {
        if (amount > account.balance) {
            console.log(chalk.red.bold("Insufficient Balance..."));
            return;
        }

        const newBalance = account.balance - amount;
        this.updateBalance(account.accNumber, newBalance);
    }

    private deposit(account: BankAccount, amount: number): void {
        const newBalance = account.balance + amount;
        this.updateBalance(account.accNumber, newBalance);
    }

    private updateBalance(accNumber: number, newBalance: number): void {
        this.accounts = this.accounts.map((acc) =>
            acc.accNumber === accNumber ? { ...acc, balance: newBalance } : acc
        );
        console.log(chalk.bold.blueBright("Transaction successful!"));
    }
}

const myBank = new Bank();

// ASCII art for a nice welcome
console.log(chalk.blueBright.bold(`
  Welcome to National Bank

  _._._                       _._._
  _|   |_                     _|   |_
  | ... |_._._._._._._._._._._| ... |
  | ||| |  o NATIONAL BANK o  | ||| |
  | """ |  """    """    """  | """ |
())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
(())) |     |---------------------|     | (()))
(())())| """ |  """    """    """  | """ |(())())
(()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
^~^~                                ~^~^
Sher^


`));

// Customer creation
for (let i = 1; i <= 3; i++) {
    const fName = faker.person.firstName("female");
    const lName = faker.person.lastName();
    const num = parseInt(faker.phone.number());
    const cus = new Customer(fName, lName, 25 * i, "female", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccount({
        accNumber: cus.accNumber,
        balance: 100 * i,
    });
}

// Bank functionality
async function bankService(bank: Bank): Promise<void> {
    do {
        const service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please Select the Service",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Transfer Money", "Exit"],
        });

        // View balance
        if (service.select === "View Balance") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            const accountNumber = parseInt(res.num);
            const account = bank.getAccountByAccountNumber(accountNumber);

            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            } else {
                const customer = bank.getCustomerByAccountNumber(accountNumber);
                console.log(
                    `Dear ${chalk.green.italic(customer?.firstName)} ${chalk.green.italic(
                        customer?.lastName
                    )}, your Account Balance is ${chalk.bold.blueBright(`${account.balance}`)}`
                );
            }
        }

        // Cash withdraw
        if (service.select === "Cash Withdraw") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            const accountNumber = parseInt(res.num);
            const amountToWithdraw = await promptForAmount("withdraw");
            bank.performTransaction(accountNumber, amountToWithdraw, "withdraw");
        }

        // Cash deposit
        if (service.select === "Cash Deposit") {
            const res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            const accountNumber = parseInt(res.num);
            const amountToDeposit = await promptForAmount("deposit");
            bank.performTransaction(accountNumber, amountToDeposit, "deposit");
        }

        // Transfer money
        if (service.select === "Transfer Money") {
            const sourceAccountNumber = await promptForAccountNumber("source");
            const destinationAccountNumber = await promptForAccountNumber("destination");
            const amountToTransfer = await promptForAmount("transfer");

            const sourceAccount = bank.getAccountByAccountNumber(sourceAccountNumber);
            const destinationAccount = bank.getAccountByAccountNumber(destinationAccountNumber);

            if (!sourceAccount || !destinationAccount) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            } else {
                if (amountToTransfer > sourceAccount.balance) {
                    console.log(chalk.red.bold("Insufficient Balance for Transfer..."));
                } else {
                    bank.performTransaction(sourceAccountNumber, amountToTransfer, "withdraw");
                    bank.performTransaction(destinationAccountNumber, amountToTransfer, "deposit");
                }
            }
        }

        // Exit
        if (service.select === "Exit") {
            console.log(chalk.blueBright.bold(`
  Thank you for using National Bank!
  Have a great day!
`));
            return;
        }
    } while (true);
}

async function promptForAmount(transactionType: string): Promise<number> {
    const answer = await inquirer.prompt({
        type: "number",
        message: `Please enter the amount to ${transactionType}:`,
        name: "amount",
    });
    return answer.amount;
}

async function promptForAccountNumber(accountType: string): Promise<number> {
    const answer = await inquirer.prompt({
        type: "input",
        message: `Please Enter ${accountType} Account Number:`,
        name: "accountNumber",
    });
    return parseInt(answer.accountNumber);
}

// Run the bank service
bankService(myBank);
