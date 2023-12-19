// DEPENDECIES
const inquirer = require("inquirer");
const fs = require("fs");
const {} = require("./lib/shapes");
const { text } = require("stream/consumers");

// HELPER FUNCTIONS
// prompt function to prompt user of questions when node index is ran
function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message:
        "Please enter the text you would like to display on the shape (UP TO 3 CHARACTERS).",
      name: "textInput",
      validate: function (textInput) {
        if (textInput.length > 3 || !textInput) {
          console.log("\n", "Enter a text value of up to 3 characters.");
          promptUser();
        } else {
          console.log("\n", "Good job!");
        }
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
  // .then((answers) => {
  //   if (answers.textInput.length > 3 || !answers.textInput) {
  //     console.log("Enter a text value of at least 3 characters.");
  //     promptUser();
  //   } else {
  //     console.log("File written!");
  //   }
  // });
}

// INITIALIZATION
promptUser();
