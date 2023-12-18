// DEPENDECIES
const inquirer = require("inquirer");
const fs = require("fs");
const {} = require("./lib/shapes");

// HELPER FUNCTIONS
// prompt function to prompt user of questions when node index is ran
function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message:
        "Please enter the text you would like to display (UP TO 3 CHARACTERS).",
      name: "textInput",
    },
    {
      type: "input",
      message:
        "Please enter the text color you would like to use (OR a hexadecimal number).",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please choose which shape you would like to display.",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message:
        "Please choose the color of the shape (OR a hexadecimal number).",
      name: "shapeColor",
    },
  ]);
}

// INITIALIZATION
