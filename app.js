#!/usr/bin/env node
import inquirer from "inquirer";
//Printing welcome message
console.log('\n\t\t***************  Welcome to "alihashmi2288" - "Number_Guessing_Game"  ***************\n');
//Generating a random number
let random_number = Math.floor(Math.random() * 6) + 1;
let input = await inquirer.prompt([
    {
        name: "user_guessed_number",
        type: "number",
        message: "Please guess a number between 1 to 6 : ",
    },
]);
if (input.user_guessed_number === random_number) {
    console.log("Congraulations ! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
