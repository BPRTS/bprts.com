import {
    WaveGroup
} from './wavegroup.js';

var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.WaveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
        
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.WaveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.WaveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    update(dt);
    render(dt);
}

window.onload = () => {
    new App();
};