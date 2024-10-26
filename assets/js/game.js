class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.interval = null;
        this.started = false;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.aliens = [new Alien(ctx)];

        this.setListeners();
    }

    start() {
        this.started = true;
        let tick = 0;

        this.interval = setInterval(() => {
            this.clear();

            this.move();

            this.draw();

            tick++;

            if (tick >= 300) {
                tick = 0;
                this.addAlien();
            }

        }, 1000 / 60);
    }

    addAlien() {
        const newAlien = new Alien(this.ctx);
        this.aliens.push(newAlien);

        this.aliens = this.aliens.filter((e) => e.x + e.w > 0);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move() {
        this.background.move();
        this.player.move();
        this.aliens.forEach(alien => alien.move());
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.aliens.forEach(alien => alien.draw());
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