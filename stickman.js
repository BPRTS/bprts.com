class Stickman {
    constructor() {
        const div = document.querySelector('.about');

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('stickman');
        div.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }

    resize() {
        this.stageWidth = this.canvas.clientWidth;
        this.stageHeight = this.canvas.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        // Draw the head (arc)
        this.ctx.beginPath();
        this.ctx.arc(100, 100, 20, 0, Math.PI * 2); // Head
        this.ctx.stroke(); // Outline the arc
        this.ctx.fillStyle = "blue"; // Set the fill color
        this.ctx.fill(); // Fill the arc with blue
    }
}

window.addEventListener('load', () => {
    new Stickman();
});
