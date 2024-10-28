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
        let tickAlien = 50;

        this.interval = setInterval(() => {
            this.clear();

            this.move();

            this.draw();

            tick++;

            if (tick >= tickAlien) {
                tick = 0;
                this.addAlien();
                if(tickAlien > 25) {
                    tickAlien--;
                }
                console.log(tickAlien);
            }

        }, 1000 / 60);
    }

    addAlien() {
        const AlienType = [RedAlien, GreenAlien, BlueAlien, YellowAlien];
        const RandomAlienClass = AlienType[Math.floor(Math.random() * AlienType.length)];
        const newAlien = new RandomAlienClass(this.ctx);  
        this.aliens.push(newAlien);
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