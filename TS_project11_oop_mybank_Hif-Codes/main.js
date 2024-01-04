import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
import chalk from 'chalk';
// Customer class
class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobNumber;
    accNumber;
    constructor(firstName, lastName, age, gender, mobNumber, accNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNumber;
        this.accNumber = accNumber;
    }
}
// Bank class
class Bank {
    customers = [];
    accounts = [];
    addCustomer(customer) {
        this.customers.push(customer);
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    updateAccount(account) {
        const index = this.accounts.findIndex(acc => acc.accNumber === account.accNumber);
        if (index !== -1) {
            this.accounts[index] = account;
        }
    }
    getCustomerByAccountNumber(accNumber) {
        return this.customers.find(customer => customer.accNumber === accNumber);
    }
    getAccountByAccountNumber(accNumber) {
        return this.accounts.find(account => account.accNumber === accNumber);
    }
}
const myBank = new Bank();
// Customer creation
for (let i = 1; i <= 3; i++) {
    const fName = faker.person.firstName('female');
    const lName = faker.person.lastName();
    const num = parseInt(faker.phone.number('3#########'));
    const customer = new Customer(fName, lName, 25 * i, 'female', num, 1000 + i);
    myBank.addCustomer(customer);
    myBank.addAccount({ accNumber: customer.accNumber, balance: 100 * i });
}
// Bank functionality
async function bankService(bank) {
    do {
        const { select } = await inquirer.prompt({
            type: 'list',
            name: 'select',
            message: 'Please Select the Service',
            choices: ['View Balance', 'Cash Withdraw', 'Cash Deposit', 'Exit'],
        });
        switch (select) {
            case 'View Balance':
                await viewBalance(bank);
                break;
            case 'Cash Withdraw':
                await cashWithdraw(bank);
                break;
            case 'Cash Deposit':
                await cashDeposit(bank);
                break;
            case 'Exit':
                console.log(chalk.green.bold('Exiting MyBank App.'));
                return;
            default:
                console.log(chalk.red.bold.italic('Invalid selection.'));
                break;
        }
    } while (true);
}
async function viewBalance(bank) {
    const { num } = await inquirer.prompt({
        type: 'input',
        name: 'num',
        message: 'Please Enter your Account Number:',
    });
    const account = bank.getAccountByAccountNumber(Number(num));
    if (!account) {
        console.log(chalk.red.bold.italic('Invalid Account Number'));
        return;
    }
    const customer = bank.getCustomerByAccountNumber(account.accNumber);
    console.log(`Dear ${chalk.green.italic(customer?.firstName)} ${chalk.green.italic(customer?.lastName)}, your Account Balance is ${chalk.bold.blueBright(`${account.balance}`)}`);
}
async function cashWithdraw(bank) {
    const { num } = await inquirer.prompt({
        type: 'input',
        name: 'num',
        message: 'Please Enter your Account Number:',
    });
    const account = bank.getAccountByAccountNumber(Number(num));
    if (!account) {
        console.log(chalk.red.bold.italic('Invalid Account Number'));
        return;
    }
    const { rupee } = await inquirer.prompt({
        type: 'number',
        message: 'Please enter the withdrawal amount.',
        name: 'rupee',
    });
    if (rupee > account.balance) {
        console.log(chalk.red.bold('Insufficient Balance...'));
        return;
    }
    const newBalance = account.balance - rupee;
    bank.updateAccount({ accNumber: account.accNumber, balance: newBalance });
    console.log(chalk.green.bold('Withdrawal successful.'));
}
async function cashDeposit(bank) {
    const { num } = await inquirer.prompt({
        type: 'input',
        name: 'num',
        message: 'Please Enter your Account Number:',
    });
    const account = bank.getAccountByAccountNumber(Number(num));
    if (!account) {
        console.log(chalk.red.bold.italic('Invalid Account Number'));
        return;
    }
    const { rupee } = await inquirer.prompt({
        type: 'number',
        message: 'Please enter the deposit amount.',
        name: 'rupee',
    });
    const newBalance = account.balance + rupee;
    bank.updateAccount({ accNumber: account.accNumber, balance: newBalance });
    console.log(chalk.green.bold('Deposit successful.'));
}
// Run the bank service
bankService(myBank);
