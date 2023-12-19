// DEPENDECIES

// Inquirer module
const inquirer = require("inquirer");
// Import 3 shape classes
const { Circle, Triangle, Square } = require("./shapes");
// Import writeFile function from fs/promises module to write data to created file.
const { writeFile } = require("fs/promises");
const fs = require("fs");

// DATA

// CLI Class that has run method
class CLI {
  run() {
    return inquirer.prompt([
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
    ]);
  }
}
