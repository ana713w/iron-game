const canvas = document.getElementById('canvas');
const startButton = document.getElementById('button-intro');
const restartButton = document.getElementById('button-game-over');
const gamesIntro = document.getElementById('game-intro');
const gamesOver = document.getElementById('game-over');
const formName = document.getElementById('fname');
const instructionsButton = document.getElementById('button-instructions');
const instructions = document.getElementById('instructions');
const rankingButton = document.getElementById('button-ranking');
const ranking = document.getElementById('ranking');
const backButtonI = document.getElementById('button-back-i');
const backButtonR = document.getElementById('button-back-r');

gamesOver.style.visibility = "hidden";
ranking.style.visibility = "hidden";
instructions.style.visibility = "hidden";

const ctx = canvas.getContext('2d');

const game = new Game(ctx);
game.loadScores();

startButton.addEventListener('click', () => {
    if (formName.value.trim() === ""){
        alert("Por favor, ingresa tu nombre para empezar el juego :)");
        return;
    } else {
        gamesIntro.style.display = 'none';
        canvas.style.display = 'block';
        game.playerName = formName.value.trim();
        game.start();
    }
});

restartButton.addEventListener('click', () => {
    window.location.reload();
});

rankingButton.addEventListener('click', () => {
    ranking.style.visibility = "visible";
    gamesIntro.style.visibility = "hidden";
});

instructionsButton.addEventListener('click', () => {
    instructions.style.visibility = "visible";
    gamesIntro.style.visibility = "hidden";
});

backButtonR.addEventListener('click', () => {
    ranking.style.visibility = "hidden"
    gamesIntro.style.visibility = "visible";
});

backButtonI.addEventListener('click', () => {
    instructions.style.visibility = "hidden"
    gamesIntro.style.visibility = "visible";
});

