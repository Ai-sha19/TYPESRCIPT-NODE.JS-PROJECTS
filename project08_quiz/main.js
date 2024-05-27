#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta("*****************-------------------------******************"));
console.log(chalk.bold.magenta(chalk.bold.green("\n<<<<<<<<<<<<<<<<<<< WELCOME TO QUIZ APP >>>>>>>>>>>>>>>>>>>\n")));
console.log(chalk.bold.magenta("*****************-------------------------******************"));
// collect username
let name = await inquirer.prompt([
    {
        name: "user",
        type: "input",
        message: chalk.bold.green("\nEnter Your Name:"),
    },
]);
console.log(chalk.bold.magenta(`\n${chalk.bold.green(name.user)} answer the following quiz:\n`));
// create object for quiz
let quiz1 = await inquirer.prompt([
    {
        name: "Qno_1",
        type: "list",
        message: chalk.bold.cyan("\nQ1. What is TypeScript primarily used for?\n"),
        choices: [
            chalk.bold.yellow("A. Memory Management"),
            chalk.bold.yellow("B. Dynamic Typing"),
            chalk.bold.yellow("C. Static Typing"),
            chalk.bold.yellow("D. Asynchronous operations"),
        ],
    }
]);
let score = 0;
// make switch case for quiz 1
switch (quiz1.Qno_1) {
    case chalk.bold.yellow("C. Static Typing"):
        console.log(chalk.bold.green("\nQno_1: Correct Answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log(chalk.bold.yellow("\nCorrect Answer is 'C. Static Typing'."));
        break;
}
let quiz2 = await inquirer.prompt([
    {
        name: "Qno_2",
        type: "list",
        message: chalk.bold.cyan("\nQ2. How do you specify that a function does not return anything in TypeScript?\n"),
        choices: [
            chalk.bold.yellow("A. function myFunc(): undefined"),
            chalk.bold.yellow("B. function myFunc(): void"),
            chalk.bold.yellow("C. function myFunc(): null"),
            chalk.bold.yellow("D. function myFunc(): None"),
        ],
    },
]);
// make switch case for quiz 2
switch (quiz2.Qno_2) {
    case chalk.bold.yellow("B. function myFunc(): void"):
        console.log(chalk.bold.green("\nQno_2: Correct Answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log(chalk.bold.yellow("\nCorrect Answer is 'B. function myFunc(): void'."));
        break;
}
let quiz3 = await inquirer.prompt([
    {
        name: "Qno_3",
        type: "list",
        message: chalk.bold.cyan("\nQ3. How do you define an optional parameter in the TypeScript function?\n"),
        choices: [
            chalk.bold.yellow("A. function foo(param: string?)"),
            chalk.bold.yellow("B. function foo(param?: string)"),
            chalk.bold.yellow("C. function foo(param string=)"),
            chalk.bold.yellow("D. function foo(param string?)"),
        ],
    }
]);
// make switch case for quiz 3
switch (quiz3.Qno_3) {
    case chalk.bold.yellow("B. function foo(param?: string)"):
        console.log(chalk.bold.green("\nQno_3: Correct Answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log(chalk.bold.yellow("\nCorrect Answer is 'B. function foo(param?: string)'."));
        break;
}
let quiz4 = await inquirer.prompt([
    {
        name: "Qno_4",
        type: "list",
        message: chalk.bold.cyan("\nQ4. How do you define an array of strings in TypeScript?\n"),
        choices: [
            chalk.bold.yellow("A. Array<string>"),
            chalk.bold.yellow("B. string[]"),
            chalk.bold.yellow("C. Both A and B"),
            chalk.bold.yellow("D. List<string>"),
        ],
    }
]);
// make switch case for quiz 4
switch (quiz4.Qno_4) {
    case chalk.bold.yellow("C. Both A and B"):
        console.log(chalk.bold.green("\nQno_4: Correct Answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log(chalk.bold.yellow("\nCorrect Answer is 'C. Both A and B'."));
        break;
}
let quiz5 = await inquirer.prompt([
    {
        name: "Qno_5",
        type: "list",
        message: chalk.bold.cyan("\nQ5. What is a union type in TypeScript?\n"),
        choices: [
            chalk.bold.yellow("A. A type that can be any value"),
            chalk.bold.yellow("B. A type that can be one of several types"),
            chalk.bold.yellow("C. A type that can be both a string and a number simultaneously"),
            chalk.bold.yellow("D. A type that can be an object"),
        ]
    }
]);
// make switch case for quiz 5
switch (quiz5.Qno_5) {
    case chalk.bold.yellow("B. A type that can be one of several types"):
        console.log(chalk.bold.green("\nQno_5: Correct Answer"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\nIncorrect Answer"));
        console.log(chalk.bold.yellow("\nCorrect Answer is 'B. A type that can be one of several types'."));
        break;
}
console.log(chalk.bold.magenta(`\nCongratulations! ${chalk.bold.green(name.user)} Your Total Score is : ${chalk.bold.green(score)} out of ${chalk.bold.green(5)}`));
