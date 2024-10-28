class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.vy = 10;

        this.img = new Image();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.y -= this.vy;

    }
}

class IronmanBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 6;
        this.h = 20;

        this.img.src = IRONMAN_BULLET;
    }
}

class CapitanBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 20;
        this.h = 17;

        this.img.src = CAPITAN_BULLET;
    }
}

class ThorBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 24;
        this.h = 24;

        this.img.src = THOR_BULLET;
    }
}

class HulkBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 36;
        this.h = 18;

        this.img.src = HULK_BULLET;
    }
}