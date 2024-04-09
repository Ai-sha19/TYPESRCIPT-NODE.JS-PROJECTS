#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print welcome message
console.log(`\n  \t\t    <<<====================>>>`);
console.log(chalk.bold.bgMagenta(`<<<=============>>>  ${chalk.bold.hex(`#9999FF`)('Welcome To Todo-List App')} <<<=============>>>`));
console.log(`  \t\t    <<<====================>>>\n`);
while (conditions) {
    // Main Menu Options
    let option = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.bgRed("\nSelect an option you want to do :"),
            choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
        }
    ]);
    // Function to add new task to the list
    if (option.choice === 'Add Task') {
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Write something to add in the task list."
            }
        ]);
        if (newTask.task !== '') {
            todoList.push(newTask.task);
            console.log(chalk.bgGreen(`\n${newTask.task} task added in Todo-List successfully.`));
        }
        else {
            console.log(chalk.bgYellow('\nPlease write something to add in the todo list'));
        }
    }
    // Functin to view all Todo-List Tasks
    else if (option.choice === 'View Todo-List') {
        console.log(chalk.bgMagenta("\nYour Todo-List: "));
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        });
    }
    // Function to delete a task from the list
    else if (option.choice === 'Delete Task') {
        let deleteTask = await inquirer.prompt([
            {
                name: "delete_item",
                type: "list",
                message: "Select the task you want to delete :",
                choices: todoList
            }
        ]);
        let taskToDelete = deleteTask.delete_item; // Get the selected task
        let indexToDelete = todoList.indexOf(taskToDelete);
        if (indexToDelete >= 0) {
            todoList.splice(indexToDelete, 1);
            console.log(chalk.bgYellow(`\n"${taskToDelete}" task has been deleted successfully from your list`));
        }
    }
    // Function to update a task
    else if (option.choice === 'Update Task') {
        let updateChoice = await inquirer.prompt([{
                type: 'list',
                name: 'update_item',
                message: chalk.bgMagenta('\nSelect item to update'),
                choices: todoList
            }]);
        let index_to_update = todoList.indexOf(updateChoice.update_item);
        if (index_to_update >= 0) {
            let updatedText = await inquirer.prompt([{
                    type: 'input',
                    name: 'updated_text',
                    message: '\nEnter the new text:'
                }]);
            if (updatedText.updated_text.trim() === '') {
                console.log(chalk.bgGreen('\nPlease enter the item you want to update.'));
            }
            else {
                todoList[index_to_update] = updatedText.updated_text;
                console.log(chalk.bgGreen('\nItem updated successfully.'));
            }
        }
    }
    // Exit the loop
    else if (option.choice === "Exit") {
        conditions = false;
    }
}
// Print the exit message
console.log(chalk.bold.magenta(`\n<<<=============>>>  ${chalk.bold.hex(`#9999FF`)('Thanks for using Todo-List App')} <<<=============>>>\n`));
