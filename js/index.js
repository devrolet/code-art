const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(ctx);

// Creates a rectangle on every mouse click
// canvas.addEventListener('click', (e) => {
//     ctx.beginPath();
//     ctx.rect(e.x, e.y, 10, 10);
//     ctx.fill();
// });

// Creates a rect as mouse moves, in essense a pen tool
// canvas.addEventListener('mousemove', (e) => {
//     ctx.beginPath();
//     ctx.rect(e.x, e.y, 10, 10);
//     ctx.fill();
// });
// Degrees to Radians formula and function
let degToRad = (deg) => (deg / 180) * Math.PI;

ctx.beginPath();
// ctx.arc(200, 200, 100, 0, Math.PI * 2); // creates circle
// ctx.arc(200, 200, 100, 0, Math.PI); // creates half circle (bottom half)
// ctx.arc(200, 200, 100, Math.PI, Math.PI * 2); // creates half circle (top half);
ctx.arc(200, 200, 100, 0, degToRad(360)); // creates circle using a function as a param
// ctx.arc(200, 200, 100, degToRad(270), degToRad(360)); // quarter circle
ctx.stroke();
ctx.fill();

// Degrees to Radians (long approach)
// let degreesToRadians = (degrees) => {
//     let pi = Math.pi;
//     return degrees * (pi/180);
// }

