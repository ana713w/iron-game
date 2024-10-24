class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.interval = null;
        this.started = false;

        this.background = new Background(ctx);
    }

    start() {
        this.started = true,

        this.interval = setInterval(() => {
            this.clear();

            this.move();

            this.draw();

        }, 1000 / 60);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move() {
        this.background.move();
    }

    draw() {
        this.background.draw();
    }
 }