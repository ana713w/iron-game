const canvas = document.getElementById('canvas');
const startButton = document.querySelector('.button');
const gamesIntro = document.getElementById('game-intro');

const ctx = canvas.getContext('2d');

const game = new Game(ctx);

startButton.addEventListener('click', () => {
    gamesIntro.style.display = 'none';
    canvas.style.display = 'block';
    game.start();
})


