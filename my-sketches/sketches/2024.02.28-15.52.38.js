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

    // const rectWidth = width * 0.02;
    // const rectHeight = height * 0.2;

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(0, 0, 50, 50);
    context.fill();

    

    context.translate(100, 100);
    context.save();

    context.rotate(30 * Math.PI / 180)

    context.beginPath();
    context.rect(0, 0, 50, 50);
    context.fill();

   
    context.restore();

    context.fillStyle = 'red';

    context.beginPath();
    context.rect(0, 0, 70, 70);
    context.fill();
    }
  };

canvasSketch(sketch, settings);
