export class Point {
    constructor() {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}