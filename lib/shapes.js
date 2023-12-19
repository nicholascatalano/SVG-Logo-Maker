// Shape constructor class to be the parent class
class Shape {
  constructor(textInput, textColor, shape, shapeColor) {
    this.textInput = textInput;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

// Circle constructor class which inherits parent (Shape) properties
class Circle extends Shape {
  constructor(textInput, textColor, shape, shapeColor) {
    // super keyword to access properties of parent class
    super(textInput, textColor, shape, shapeColor);
  }
  // renders the SVG shape
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="150" cy="150" r="100" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text></svg>`;
  }
}

class Triangle extends Shape {}

class Square extends Shape {}

module.exports = { Circle, Triangle, Square };
