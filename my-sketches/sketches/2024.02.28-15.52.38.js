const canvasSketch = require('canvas-sketch');

const settings = {
  // dimensions: [ 2048, 2048 ]
  dimensions: "A4",
  orientation: "landscape"
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(100, 100, 100, 100);
    context.stroke();
  };
};

canvasSketch(sketch, settings);
