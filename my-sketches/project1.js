const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // context.strokeStyle = 'gold' // stroke style used to change stroke color
    context.fillStyle = 'black';
    context.lineWidth = 8
    const myCircle = new Circle(100, 100, 50);
    myCircle.draw(context);
  };
};

canvasSketch(sketch, settings);

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // context.stroke();
    context.fill();
  }
}