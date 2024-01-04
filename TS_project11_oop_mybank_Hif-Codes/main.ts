import inquirer from 'inquirer';
import {faker} from '@faker-js/faker';
import chalk from 'chalk';

// Customer class
class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public gender: string,
        public mobNumber: number,
        public accNumber: number
    ) {}
}

// BankAccount interface
interface BankAccount {
    accNumber: number;
    balance: number;
}

// Bank class
class Bank {
    private customers: Customer[] = [];
    private accounts: BankAccount[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    addAccount(account: BankAccount): void {
        this.accounts.push(account);
    }

    updateAccount(account: BankAccount): void {
        const index = this.accounts.findIndex(acc => acc.accNumber === account.accNumber);
        if (index !== -1) {
            this.accounts[index] = account;
        }
    }

    getCustomerByAccountNumber(accNumber: number): Customer | undefined {
        return this.customers.find(customer => customer.accNumber === accNumber);
    }

    getAccountByAccountNumber(accNumber: number): BankAccount | undefined {
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
async function bankService(bank: Bank): Promise<void> {
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

async function viewBalance(bank: Bank): Promise<void> {
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

    console.log(
        `Dear ${chalk.green.italic(customer?.firstName)} ${chalk.green.italic(
            customer?.lastName
        )}, your Account Balance is ${chalk.bold.blueBright(`${account.balance}`)}`
    );
}

async function cashWithdraw(bank: Bank): Promise<void> {
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

async function cashDeposit(bank: Bank): Promise<void> {
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
