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
describe("Triangle", () => {
  it("should render a blue triangle in svg", () => {
    // const for new Circle object
    const triangle = new Triangle("WOW", "green", "triangle", "blue");
    expect(triangle.render()).toBe(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="50%" y="50%" text-anchor="middle" fill="green">WOW</text></svg>`);
  });
});

// Describe test for Square class constructor
