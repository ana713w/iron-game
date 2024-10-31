const canvas = document.getElementById('canvas');
const startButton = document.getElementById('button-intro');
const restartButton = document.getElementById('button-game-over');
const gamesIntro = document.getElementById('game-intro');
const gamesOver = document.getElementById('game-over');

gamesOver.style.visibility = "hidden";

const ctx = canvas.getContext('2d');

const game = new Game(ctx);

startButton.addEventListener('click', () => {
    gamesIntro.style.display = 'none';
    canvas.style.display = 'block';
    game.start();
})

restartButton.addEventListener('click', () => {
    gamesOver.style.display = 'none';
    canvas.style.display = 'block';
    game.start();
})


