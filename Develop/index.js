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
            message: "How would you describe this app? WHat will it be used for?",
            name: "description",
        },
        {
            type: "checbox-plus",
            message: "What are the components of this app this app?",
            name: "TableContents",
            default: ["installation Instructions", "Usage Information", "Contribution Guidelines"],
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
            name: "contribution",
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
        const { questions, test, contribution, license, usage, installation, TableContents, description, title } = data;
        const generateReadMe = `
#${title}  

## Description

${description}

## Table of Contents 

${TableContents}  

## Installation Instructions 

${installation}

## Usage 

${usage}

## License 

${license}

## Contribution 

${contribution}

### Testing 

${test}

### Question 

${questions}


    
    ` ;


        fs.writeFile("readme.md", generateReadMe, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });