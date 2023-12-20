// DEPENDENCIES

// Inquirer module
const inquirer = require("inquirer");
// Import 3 shape classes
const { Circle, Triangle, Square } = require("./shapes");
// Import writeFile function from fs/promises module to write data to created file.
const fs = require("fs");
const { writeFile } = require("fs/promises");

// DATA

// CLI Class that has run method
class CLI {
  run() {
    // inquirer prompt method with user questions
    return (
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
        // first then promise to grab user data
        .then(({ textInput, textColor, shape, shapeColor }) => {
          // if statement to check for user shape choice and writes svg file
          if (shape === "Circle") {
            fs.writeFileSync(
              "logo.svg",
              `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${textColor}">${textInput}</text></svg>`
            );
          } else if (shape === "Triangle") {
            fs.writeFileSync(
              "logo.svg",
              `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${textColor}">${textInput}</text></svg>`
            );
          } else {
            fs.writeFileSync(
              "logo.svg",
              `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"><${shape} x="90" y="40" width="120" height="120" fill="${shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${textColor}">${textInput}</text></svg>`
            );
          }
        })
        .then(() => {
          // confirm logo.svg file has been generated
          console.log("Successfully generated logo.svg file!");
        })
        // catch any errors that occur and display them in the console
        .catch((error) => {
          console.log(error);
        })
    );
  }
}

module.exports = CLI;
