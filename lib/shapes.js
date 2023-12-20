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
    xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="150" cy="100" r="100" fill="${this.shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(textInput, textColor, shape, shapeColor) {
    // super keyword to access properties of parent class
    super(textInput, textColor, shape, shapeColor);
  }
  // renders the SVG shape
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><${this.shape} points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(textInput, textColor, shape, shapeColor) {
    // super keyword to access properties of parent class
    super(textInput, textColor, shape, shapeColor);
  }
  // renders the SVG shape
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"><${this.shape} x="90" y="40" width="120" height="120" fill="${this.shapeColor}" /><text x="150" y="110" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
