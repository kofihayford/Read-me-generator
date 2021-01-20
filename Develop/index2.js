const fs = require("fs");
const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "Where are you from?",
            name: "location",
        },
        {
            type: "list",
            message: "What's your fav icecream?",
            name: "icecream",
            choices: ["Strawberry", "Chocolate", "Vanilla", "Pistachio", "Pizza"],
        },
        {
            type: "list",
            message: "What is your Hogwarts House?",
            name: "harrypotter",
            choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
        },
        {
            type: "input",
            message: "What is your favorite Street Fighter Character?",
            name: "fighter",
        },
    ])
    .then((data) => {
        const { name, location, icecream, harrypotter, fighter } = data;
        const generateHTML = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <title>Document</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi my name is ${name}</h1>
    <p class="lead">I am from ${location}. My favorite Hogwarts house is ${harrypotter}. And my streetfighter of choice is ${fighter}</p>
    <p>My list of favorite icecreams:</p>
    <ul>
    <li>${icecream}</li>
    </ul>
  </div>
</div>
  </body>
</html>
    `;
        fs.writeFile("index.html", generateHTML, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });