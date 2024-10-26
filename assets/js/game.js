class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.interval = null;
        this.started = false;

        this.background = new Background(ctx);
        this.player = new Player(ctx);

        this.setListeners();
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
        this.player.move();
    }

    draw() {
        this.background.draw();
        this.player.draw();
    }

    setListeners() {
        document.addEventListener("keydown", (event) => {
            this.player.onKeyDown(event.keyCode);
        });

        document.addEventListener("keyup", (event) => {
            this.player.onKeyUp(event.keyCode);
        })
    }
 }