class Alien {
    constructor(ctx) {
        this.ctx = ctx;

        this.y = 0;
        this.x = Math.random() * (ctx.canvas.width - 40);

        this.img = new Image();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.vy;
    }
}

class RedAlien extends Alien {
    constructor(ctx) {
        super(ctx);

        this.w = 40;
        this.h = 32;

        this.vy = 1;

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