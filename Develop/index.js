var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkDown = require("./utils/generateMarkdown");
var path = require("path");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your Project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation ionstructions?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Add list of entities who contributed to this project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a License.",
    choices: ["Apache License 2.0", "MIT License", "Eclipse Public License2.0"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
];
// array of badge links
var badges = [
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
];
// file name
var readme = "readme.md";
// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  // ask the user questions and get the answers
  inquirer.prompt(questions).then((res) => {
    console.log(res);
    //create the file using the file name and markdown on the response
    writeToFile(readme, generateMarkDown(res));
  });
}

// function call to initialize program
init();
