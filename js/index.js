const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(ctx);

canvas.addEventListener('click', (e) => {
    console.log(e.x, e.y);
})