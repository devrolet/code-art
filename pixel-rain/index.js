const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "img/curry.png";

let brightnessArray = [];
let particlesArray = [];

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imgData.data);


    for (let i = 0; i < imgData.data.length; i++) {
        const red = imgData.data[i*4];
        const green = imgData.data[(i*4) + 1];
        const blue = imgData.data[(i*4) + 2];
        const brightness = (red, blue, green) / 3;

        brightnessArray.push(brightness);
    }

    // generate 10k particles
    // for (let i = 0; i < 10000; i++) {
    //     // particlesArray(new Particle)
        
    // }
}


