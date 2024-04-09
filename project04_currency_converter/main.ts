#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright("\n\n \t \t💰💰💰💲💲============== WELCOME TO CURRENCY CONVERTER =================💲💲💰💰💰\n"));

// Define the list of currencies and their exchange rates
const currency: any = {
    "USD": 1,      // United States Dollar (Base Currency)
    "EUR": 0.92,   // Euro (European Currency)
    "GBP": 0.79,   // Pound Sterling (British Pound)
    "INR": 83.30,  // Indian Rupee
    "PKR": 277.54, // Pakistani Rupee
    "JPY": 151.62, // Japanese Yen
    "CAD": 1.36,   // Canadian Dollar
    "SAR": 3.75,   // Saudi Riyal
    "AED": 3.67    // United Arab Emirates Dirham
};

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt(
    [
        {
            name: 'from_currency',
            message: "Select the currency to convert from:",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JPY', 'CAD', 'SAR', 'AED']
        },
        {
            name: 'to_currency',
            message: 'Select the currency to convert into:',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'JPY', 'CAD', 'SAR', 'AED']
        },
        {
            name: 'amount',
            message: "Enter the amount to convert:",
            type: 'number'
        }
    ]
);

// Perform currency conversion by using Formula
let from_amount = currency[user_answer.from_currency]  // exchange rate
let to_amount = currency[user_answer.to_currency]  // exchange rate
let amount = user_answer.amount

// Formula of Conversion
let base_amount = amount / from_amount  // USD base currency  
let converted_amount = base_amount * to_amount

// Display the onverted 
console.log(`\nConverted Amount = ${chalk.bgGreen(converted_amount.toFixed(2))}`);

console.log(chalk.bold.greenBright("\n\n \t \t<<<================= 🚀 Thanks for using my application 🚀 ===================>>>\n\n "));

