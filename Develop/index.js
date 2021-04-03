const fs = require("fs");
const inquirer = require("inquirer");
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
            type: "list",
            message: "What are the components of this app this app?",
            name: "Table of Contents",
            choices: ["installation Instructions," "Usage Information," "Contribution Guidelines,"],
        },
        {
            type: "input",
            message: "How is this app installed and accessed",
            name: "installation",
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
    .then((data) => {
        const { name, location, icecream, harrypotter, fighter } = data;
        const generateReadMe = `
    ## Your Task`;
        fs.writeFile("index.html", generateHTML, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });