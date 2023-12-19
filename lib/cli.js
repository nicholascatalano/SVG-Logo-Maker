// DEPENDECIES

// Inquirer module
const inquirer = require("inquirer");
// Import 3 shape classes
const { Circle, Triangle, Square } = require("./shapes");
// Import writeFile function from fs/promises module to write data to a file.
const { writeFile } = require("fs/promises");
const fs = require("fs");
