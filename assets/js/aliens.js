class Alien {
    constructor(ctx) {
        this.ctx = ctx;

        this.y = 0;
        this.x = Math.random() * (ctx.canvas.width - 40);

        this.w = 40;
        this.h = 32;

        this.vy = 1;

        this.img = new Image();
        this.img.src = "/assets/images/red.png";
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.vy;
    }
}