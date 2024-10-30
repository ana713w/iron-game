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
        this.img.src = IRONMAN_SPRITE;

        this.bullets = [];
        this.bulletType = IronmanBullet;
    }

    move() {
        this.x += this.vx;

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.w > this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w;
        }

        this.bullets.forEach((b) => b.move());

        this.bullets = this.bullets.filter((b) => b.x <= this.ctx.canvas.width); // los bullets fuera del canvas se eliminan

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
        const bulletX = (this.x + this.w / 2);
        const bulletY = this.y;
        const bullet = new this.bulletType(this.ctx, bulletX, bulletY);
    
        this.bullets.push(bullet);
        this.img.frameIndex = 1; 

        setTimeout(() => {
            this.img.frameIndex = 0;
        }, 100);
    }

    collides(alien) {
        const colX = alien.x <= this.x + this.w && alien.x + alien.w >= this.x;
        const colY = alien.y <= this.y + this.h && alien.y + alien.h >= this.y;

        return colX && colY;
    }

    onKeyDown(code) {
        switch (code) {
            case KEY_RIGHT:
                this.vx = 8;
                break;
            case KEY_LEFT:
                this.vx = -8;
                break;
            case KEY_1:
                this.img.src = IRONMAN_SPRITE;
                this.bulletType = IronmanBullet;
                break;
            case KEY_2:
                this.img.src = CAPITAN_SPRITE;
                this.bulletType = CapitanBullet;
                break;
            case KEY_3:
                this.img.src = THOR_SPRITE;
                this.bulletType = ThorBullet;
                break;
            case KEY_4:
                this.img.src = HULK_SPRITE;
                this.bulletType = HulkBullet;
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