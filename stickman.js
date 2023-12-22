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
    
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    
        const centerX = this.stageWidth / 2;
        const centerY = this.stageHeight / 2;
        const radius = 20;
    
        // Set the stroke and fill styles to white
        this.ctx.strokeStyle = "white";
        this.ctx.fillStyle = "white";
    
        // Draw the stickman
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY - radius - 10, radius -10, 0, Math.PI * 2); // Head
        this.ctx.moveTo(centerX, centerY - radius); // Body
        this.ctx.lineTo(centerX, centerY + radius); // Legs
        this.ctx.moveTo(centerX - radius, centerY - 5); // Arms
        this.ctx.lineTo(centerX + radius, centerY - 5);
        this.ctx.stroke();
    
        // Add waving animation
        const angle = Math.sin(Date.now() / 200) * 0.5; // Adjust the 200 to change the waving speed
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - radius, centerY - radius);
        this.ctx.lineTo(centerX - 10 * Math.sin(angle), centerY - radius + 10);
        this.ctx.stroke();
    
        requestAnimationFrame(this.resize.bind(this)); // Create a smooth animation
    }
}

window.addEventListener('load', () => {
    new Stickman();
});
