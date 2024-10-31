class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.interval = null;
        this.started = false;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.aliens = [new Alien(ctx)];

        this.setListeners();

        this.score = 0;

        this.audioShoot = new Audio("/assets/audio/shoot.mp3");
        this.audioShoot.volume = 0.03;

        this.audioGameOver = new Audio("/assets/audio/game-over.mp3");
        this.audioGameOver.volume = 0.03;
    }

    start() {
        this.started = true;
        let tick = 0;
        let tickAlien = 110;

        this.interval = setInterval(() => {
            this.clear();

            this.move();

            this.draw();

            this.collisions();

            tick++;

            if (tick >= tickAlien) {
                tick = 0;
                this.addAlien();

                if(tickAlien > 25) {
                    tickAlien--;
                }
            }

        }, 1000 / 60);
    }

    gameOver() {
        this.audioShoot.pause();
        this.audioGameOver.play();

        gamesOver.style.visibility = "visible";

        let textScore = document.getElementById("score");

        textScore.textContent = `SCORE : ${this.score}`;
        
        this.started = false;
        clearInterval(this.interval);
    }

    reset() {
        this.score = 0;

        this.player = new Player(ctx);
        
        this.aliens = [new Alien(ctx)];

        this.started = true;

        let tick = 0;
        let tickAlien = 110;

        this.interval = setInterval(() => {
            this.clear();

            this.move();

            this.draw();

            this.collisions();

            tick++;

            if (tick >= tickAlien) {
                tick = 0;
                this.addAlien();

                if(tickAlien > 25) {
                    tickAlien--;
                }
            }

        }, 1000 / 60);
    }

    collisions() {
        this.aliens.forEach((alien) => {
            if (this.player.collides(alien)) {
                this.gameOver();
            }
            
            if((alien.y + alien.h) >= this.ctx.canvas.height) {
                this.gameOver();
            }

            this.player.bullets.forEach((bullet) => {

                if (bullet.collides(alien) && bullet.destroyableAlien === alien.constructor) {
                    this.player.bullets = this.player.bullets.filter(b => b !== bullet);
                    alien.isExploding();
                    this.audioShoot.play();

                    this.score += alien.score;

                    setTimeout(() => {
                        this.aliens = this.aliens.filter((a) => a !== alien);
                    }, 117);

                }
            })

        });
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

        this.ctx.font = "16px 'Press Start 2P'";
        this.ctx.fillStyle = "#FFD700";
        ctx.fillText(`SCORE: ${this.score}`, 20, 35);

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