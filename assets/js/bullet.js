class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.w = 6;
        this.h = 20;

        this.x = x;
        this.y = y;

        this.vy = 10;

        this.img = new Image();
        this.img.src = "/assets/images/bullet-iron-man.png";
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.y -= this.vy;

    }
}