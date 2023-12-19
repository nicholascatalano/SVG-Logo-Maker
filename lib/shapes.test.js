// DEPENDENCIES
const { Circle, Triangle, Square } = require("./shapes");

// Describe test for Circle class constructor
describe("Circle", () => {
  it("should render a red circle in svg", () => {
    // const for new Circle object
    const circle = new Circle("HEY", "black", "circle", "red");
    expect(circle.render()).toBe(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" fill="red" /><text x="50%" y="50%" text-anchor="middle" fill="black">HEY</text></svg>`);
  });
});

// Describe test for Triangle class constructor

// Describe test for Square class constructor
