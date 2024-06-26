#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// // Game Variables
// let enemies = ["💀 Skeleton", "🧟 Zombie", "🦹 Warrior", "🥷 Assassin"];
// let maxEnemyHealth = 75;
// let enemyAttackDamageToHero = 25;
// // Player Variables
// let heroHealth = 100;
// let attackDamageToEnemy = 50;
// let numHealthPotions = 3;
// let healthPotionHealAmount = 30;
// let healthPotionDropChance = 50; // percent
// let gameRunning = true;
// console.clear()
// console.log(chalk.magenta("\n\t     Welcome to the dungeon!"));
// GAME: while (gameRunning) {
//   console.log("<<----------------------------------------------->>");
//   let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
//   let enemyIndex = Math.floor(Math.random() * enemies.length);
//   let enemy = enemies[enemyIndex];
//   console.log(chalk.yellow(`\t # ${enemy} has appeared! #\n`));
//   while (enemyHealth > 0) {
//     console.log(chalk.cyan(`\n\t🙎 Your HP: ${heroHealth}`));
//     console.log(chalk.red(`\t${enemy}'s HP: ${enemyHealth}\n`));
//     let options = await inquirer.prompt({
//       name: "ans",
//       type: "list",
//       message: "What would you like to do?",
//       choices: ["1. Attack", "2. Drink Health Potion", "3. Run!"],
//     });
//     if (options.ans === "1. Attack") {
//       let damageDealt = Math.floor(Math.random() * attackDamageToEnemy + 1);
//       let damageTaken = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
//       enemyHealth -= damageDealt;
//       heroHealth -= damageTaken;
//       console.log(chalk.green(`\n> You strike the ${enemy} for ${damageDealt} damage.`));
//       console.log(chalk.red(`> ${enemy} strikes you for ${damageTaken} damage.`));
//       if (heroHealth < 1) {
//         console.log(chalk.red("You have taken too much damage, you are too weak to go on."));
//         break;
//       }
//     } else if (options.ans === "2. Drink Health Potion") {
//       if (numHealthPotions > 0) {
//         heroHealth += healthPotionHealAmount;
//         numHealthPotions--;
//         console.log(chalk.green(`> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`));
//         console.log(chalk.cyan(`> You now have ${heroHealth} HP.`));
//         console.log(chalk.cyan(`> You have ${numHealthPotions} health potion(s) left.\n`));
//       } else {
//         console.log(chalk.red("> You have no health potions left! Defeat enemies for a chance to get one!\n"));
//       }
//     } else if (options.ans === "3. Run!") {
//       console.log(chalk.yellow(`You run away from the ${enemy}!`));
//       continue GAME;
//     } else {
//       console.log(chalk.red("Invalid command!"));
//     }
//   }
//   if (heroHealth < 1) {
//     console.log(chalk.red("You limp out of the dungeon, weak from battle."));
//     break;
//   }
//   console.log("-----------------------------------------------");
//   console.log(chalk.green(`# ${enemy} was defeated! #\n`));
//   console.log(chalk.cyan(`# You have ${heroHealth} HP left. #`));
//   let randomNumber = Math.floor(Math.random() * 100 + 1);
//   if (randomNumber < healthPotionDropChance) {
//     numHealthPotions++;
//     console.log(chalk.green(`# The ${enemy} dropped a health potion! #`));
//     console.log(chalk.cyan(`\n# You now have ${numHealthPotions} health potion(s). #`));
//   }
//   console.log("-----------------------------------------------\n");
//   let userOptions = await inquirer.prompt({
//     name: "ans",
//     type: "list",
//     message: "What would you like to do now?",
//     choices: ["1. Continue fighting", "2. Exit dungeon"],
//   });
//   if (userOptions.ans === "1. Continue fighting") {
//     console.log(chalk.magenta("\n\t   You continue on your adventure!"));
//   } else if (userOptions.ans === "2. Exit dungeon") {
//     console.log(chalk.magenta("You exit the dungeon, successful from your adventures!"));
//     break;
//   }
//   console.log(chalk.magenta("\t  ################################"));
//   console.log(chalk.magenta("\t      # THANKS FOR PLAYING #"));
//   console.log(chalk.magenta("\t  ################################\n"));
// }
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
