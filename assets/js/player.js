class Player {
    constructor(ctx) {
        this.ctx = ctx;

        this.w = 54;
        this.h = 64;

        this.x = (this.ctx.canvas.width / 2) - (this.w / 2);
        this.y = this.ctx.canvas.height - (this.h * 2);

        this.vx = 0;

        this.img = new Image();
        this.img.frames = 2;
        this.img.frameIndex = 0;
        this.img.src = "/assets/images/ironman-Sheet.png";

        this.bullets = [];
    }

    move() {
        this.x += this.vx;

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.w > this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w;
        }

        this.bullets.forEach((b) => b.move());

    }

    draw() {
        this.ctx.strokeRect(this.x, this.y, this.w, this.h);

        this.ctx.drawImage(
            this.img,
            (this.img.frameIndex / this.img.frames) * this.img.width,
            0,
            (1 / this.img.frames) * this.img.width,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
          );

        this.bullets.forEach((b) => b.draw());
    }

    fire() {
        const bulletX = this.x + this.w / 2;
        const bulletY = this.y;
        const bullet = new Bullet(this.ctx, bulletX, bulletY);
    
        this.bullets.push(bullet);
        this.img.frameIndex = 1; 

        setTimeout(() => {
            this.img.frameIndex = 0;
        }, 100);
  }

    onKeyDown(code) {
        switch (code) {
            case KEY_RIGHT:
                this.vx = 2;
                break;
            case KEY_LEFT:
                this.vx = -2;
                break;
            case KEY_SPACE:
                this.fire();
                break;
        }
    }

    onKeyUp(code) {
        switch (code) {
            case KEY_LEFT:
            case KEY_RIGHT:
                this.vx = 0;
                break;
        }
    }
}