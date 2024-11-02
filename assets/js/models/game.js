class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.playerName = "";

        this.interval = null;
        this.started = false;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.aliens = [new Alien(ctx)];

        this.setListeners();

        this.score = 0;

        this.audioShoot = new Audio("assets/audio/shoot.mp3");
        this.audioShoot.volume = 0.03;

        this.audioGameOver = new Audio("assets/audio/game-over.mp3");
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

    savesScore(name, score) {
        let scores = JSON.parse(localStorage.getItem("gameScores")) || [];
        scores.push({ name: name, score:score});

        scores.sort((a, b) => b.score - a.score);

        localStorage.setItem("gameScores", JSON.stringify(scores));
        this.loadScores();
    }

    loadScores() {
        let scores = JSON.parse(localStorage.getItem("gameScores")) || [];
        scores.sort((a, b) => b.score - a.score);

        document.getElementById("rank1").innerHTML = scores[0] ? `${scores[0].name} - ${scores[0].score}` : '-';
        document.getElementById("rank2").innerHTML = scores[1] ? `${scores[1].name} - ${scores[1].score}` : '-';
        document.getElementById("rank3").innerHTML = scores[2] ? `${scores[2].name} - ${scores[2].score}` : '-';
    }
    

    gameOver() {
        this.started = false;
        clearInterval(this.interval);
        this.audioShoot.pause();
        this.audioGameOver.play();

        gamesOver.style.visibility = "visible";

        let textScore = document.getElementById("score");
        textScore.textContent = `SCORE : ${this.score}`;

        this.savesScore(this.playerName, this.score);
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