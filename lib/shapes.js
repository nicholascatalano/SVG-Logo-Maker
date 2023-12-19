// Shape constructor class to be the parent class
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
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
  }
}

module.exports = { Circle };
