class StickmanAnimation {
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
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

window.onload = () => {
  new StickmanAnimation();
}