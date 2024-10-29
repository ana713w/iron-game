class Alien {
    constructor(ctx) {
        this.ctx = ctx;

        this.y = 0;
        this.x = Math.random() * (ctx.canvas.width - 40);

        this.img = new Image();

        this.imgExplote = new Image();
        this.imgExplote.src = "/assets/images/exploting-Sheet.png";
        this.imgExplote.frames = 7;
        this.imgExplote.frameIndex = 0;

        this.isDestroyed = false;
    }

    draw() {
        if (this.isDestroyed) {
            this.ctx.drawImage(
                this.imgExplote,
                (this.imgExplote.frameIndex / this.imgExplote.frames) * this.imgExplote.width,
                0,
                (1 / this.imgExplote.frames) * this.imgExplote.width,
                this.imgExplote.height,
                this.x,
                this.y,
                this.w,
                this.h
              );

            this.imgExplote.frameIndex++;

        } else {
            this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        }
    }

    move() {
        this.y += this.vy;
    }

    isExploding() {
        this.isDestroyed = true;
        this.vy = 0;
    }

}

class RedAlien extends Alien {
    constructor(ctx) {
        super(ctx);

        this.w = 40;
        this.h = 32;

        this.vy = 1;

        this.

        this.img.src = "/assets/images/red.png"
    }
}

class GreenAlien extends Alien {
    constructor(ctx) {
        super(ctx);

        this.w = 40;
        this.h = 32;

        this.vy = 0.8;

        this.img.src = "/assets/images/green.png"
    }
}

class BlueAlien extends Alien {
    constructor(ctx) {
        super(ctx);

        this.w = 40;
        this.h = 20;

        this.vy = 1.2;

        this.img.src = "/assets/images/blue.png"
    }
}

class YellowAlien extends Alien {
    constructor(ctx) {
        super(ctx);

        this.w = 40;
        this.h = 32;

        this.vy = 1.5;

        this.img.src = "/assets/images/yellow.png"
    }
}