const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "img/curry.png";

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}