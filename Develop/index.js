// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

// WILL USE LATER!
// const questions = []);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Second question",
            name: "description",
        },
        {
            type: "input",
            message: "What are the components of this app this app?",
            name: "Table of Contents",
            // choices: ["Strawberry", "Chocolate", "Vanilla", "Pistachio", "Pizza"],
        },
        {
            type: "list",
            message: "How is this app installed and accessed",
            name: "installation",
            // choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
        },
        {
            type: "input",
            message: "How will this project be used?",
            name: "usage",
        },
        {
            type: "input",
            message: "What is your license key?",
            name: "license",
        },
        {
            type: "input",
            message: "What did you contribute to this project?",
            name: "usage",
        },
        {
            type: "input",
            message: "What tests did you run?",
            name: "test",
        },
        {
            type: "input",
            message: "How will this project be used?",
            name: "questions",
        },
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
