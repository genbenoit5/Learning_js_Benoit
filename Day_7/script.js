let secretnumber;
let attemptsleft;
let score;
let bestScore = 0;
let previousguesses = [];


const guessinput = document.getElementById("guessinput");
const guessbtn = document.getElementById("guessbtn");
const message = document.getElementById("message");
const attemptsdisplay = document.getElementById("attempts");
const scoredisplay = document.getElementById("score");
const bestscoredisplay = document.getElementById("bestscore");
const guesslist = document.getElementById("guesslist");
const newgamebtn = document.getElementById("newgamebtn");

function startGame{

    secretnumber = Math.floor(Math.random() * 100) + 1;
    attemptsleft = 10;
    score = 100;
    previousguesses = [];
    
}