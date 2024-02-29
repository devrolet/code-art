const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    // console.log(Math.random() * 10);

    context.strokeStyle = 'green';
    context.lineWidth = Math.random() * 5;
    context.beginPath();
    
    for (let i = 0; i < 1000; i++) {
      context.rect(Math.random() * 2048, Math.random() * 2048, Math.random() * 50, Math.random() * 50);
      context.stroke();
    }
    
      
  }
};

canvasSketch(sketch, settings);
