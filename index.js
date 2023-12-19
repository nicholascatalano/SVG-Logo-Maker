// DEPENDECIES
const inquirer = require("inquirer");
const fs = require("fs");
const {} = require("./lib/shapes");

// HELPER FUNCTIONS
// prompt function to prompt user of questions when node index is ran
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Please enter the text you would like to display on the shape (UP TO 3 CHARACTERS).",
        name: "textInput",
        // validates if textInput is > 3 char, if so, returns true to continue prompts"
        validate: (textInput) => {
          if (textInput.length > 3) {
            return console.log(
              "\n",
              "Enter a text value of up to 3 characters."
            );
          }
          return true;
        },
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
    ])
    // gathers answers from user and runs file write function with the file name logo.svg
    .then((answers) => {
      writeToFile("logo.svg", answers);
    });
}

function writeToFile() {
  console.log("File written!");
}

// INITIALIZATION
promptUser();
