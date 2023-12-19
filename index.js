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

// function to write svg file
function writeToFile(fileName, answers) {
  console.log("File written!");

  // sets file content to empty string
  let svgContent = "";
  // sets file content height and width
  svgContent = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">`;

  // inserts user shape choice into file
  svgContent += `${answers.shape}`;

  // dynamic variable for shape choice
  let shapeChoice;

  // if statement to check for what user chose for shape, text color, and input

  // add basic text tag, then add dynamic text content and color from user prompt

  // use fs to write file using the file name, final svg data
  fs.writeFile(fileName, svgContent, (err) => {
    // ternary operator to check for an error, if there is log it, else log
    err ? console.log(err) : console.log("Generated your logo.svg file!");
  });
}

// INITIALIZATION
promptUser();
