const microphone = new Microphone();

let animate = () => {
    if(microphone.initialized) {
        const samples = microphone.getSamples();
        console.log(samples);
    }
    requestAnimationFrame(animate);
}
animate();