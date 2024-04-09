#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pinCode",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (pinAnswer.pinCode === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check balance", "Fast cash"],
    },
  ]);

  console.log(operationAns);

  // if user select withdraw
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "withdraw_amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.withdraw_amount <= myBalance) {
      myBalance -= amountAns.withdraw_amount;
      console.log(`Transaction Successful!!\nYour remaining balance is: ${myBalance}`);
    } else {
      console.log(`You have insufficient balance`);
    }

    // if user select check balance
  } else if (operationAns.operation === "Check balance") {
    console.log(`Your balance is: ${myBalance}`);

    // if user select fast cash
  } else if (operationAns.operation === "Fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastcash",
        message: "How much money you want to withdraw?",
        type: "list",
        choices: [10000, 20000, 30000, 40000],
      },
    ]);
    myBalance -= fastCashAns.fastcash;
    console.log(`Transaction Successful!!\nYour remaining balance is: ${myBalance}`);
  }
} else {
  console.log("Incorrect pin code");
}
