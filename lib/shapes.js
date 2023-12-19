// Shape constructor class to be the parent class, sets color value
class Shape {
  constructor() {
    this.color = "";
  }

  addShapeColor(colorInput) {
    this.color = colorInput;
  }
}

// Circle constructor class which inherits parent (Shape) properties
class Circle extends Shape {
  // renders the SVG shape
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {}

class Square extends Shape {}

module.exports = { Circle, Triangle, Square };
