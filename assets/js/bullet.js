class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.vy = 15;

        this.img = new Image();
    }

    draw() {
        this.ctx.drawImage(this.img, this.x - (this.w / 2), this.y, this.w, this.h);
    }

    move() {
        this.y -= this.vy;

    }

    collides(el) {
        const colX = this.x + this.w >= el.x && this.x <= el.x + el.w;
        const colY = this.y + this.h >= el.y && this.y <= el.y + el.h;
    
        return colX && colY;
    }
}

class IronmanBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 6;
        this.h = 20;

        this.destroyableAlien = RedAlien;

        this.img.src = IRONMAN_BULLET;
    }
}

class CapitanBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 20;
        this.h = 17;

        this.destroyableAlien = BlueAlien;

        this.img.src = CAPITAN_BULLET;
    }
}

class ThorBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 24;
        this.h = 24;

        this.destroyableAlien = YellowAlien;

        this.img.src = THOR_BULLET;
    }
}

class HulkBullet  extends Bullet{
    constructor(ctx, x, y) {
        super (ctx, x, y);

        this.w = 36;
        this.h = 18;

        this.destroyableAlien = GreenAlien;

        this.img.src = HULK_BULLET;
    }
}