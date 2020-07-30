var inquirer= require("inquirer");
var fs= require("fs");
var generateMarkDown= require("./utils/generateMarkdown");
var path= require("path");
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the Title of your project"
},
{
    type: "input",
    name: "description",
    message: "Describe your Project."
},
{
    type: "list",
    name: "license",
    message: "Choose a License.",
    choices:["Apache License 2.0","MIT License","Eclipse Public License2.0"]
},
{
    type: "input",
    name: "username",
    message: "What is your Github Username?"
},
{
    type: "input",
    name: "email",
    message: "What is your Email address?"
}
];
// var readme="Readme.md";
// // function to write README file
// function writeToFile(fileName, data) {
// return fs.writeFileSync(path.join(process.cwd(), fileName),data);
// }

// // function to initialize program
// function init() {
// inquirer.prompt(questions).then(res =>{
//     console.log(res);
//     writeToFile(readme,generateMarkDown(res));
// });
// }

// // function call to initialize program
// init();
