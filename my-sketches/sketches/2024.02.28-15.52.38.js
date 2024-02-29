const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
  // dimensions: "A4",
  // orientation: "landscape"
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const rectWidth = width * 0.02;
    const rectHeight = height * 0.2;

    context.fillStyle = 'black';
    
    // Create 12 rectangles
    for (let i = 0; i < 12; i++) {
      context.beginPath();
      context.rect(100 * i, 100, rectWidth, rectHeight);
      context.fill();
    }
  };
};

canvasSketch(sketch, settings);
