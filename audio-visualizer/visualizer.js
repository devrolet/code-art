const microphone = new Microphone();

const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 8;
        this.color = 'gold';
        this.jumpForce = 0;
        this.fallForce = 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    fall() {}

    jump() {}
}

let animate = () => {
    if(microphone.initialized) {
        const samples = microphone.getSamples();
        console.log(samples);
    }
    requestAnimationFrame(animate);
}
animate();