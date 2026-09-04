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

function startGame() {

    secretnumber = Math.floor(Math.random() * 100) + 1;
    attemptsleft = 10;
    score = 100;
    previousguesses = [];

    attemptsdisplay.textContent = attemptsleft;
    scoredisplay.textContent = score ;
    message.textContent = "Make a guess by entering a number";
    guesslist.innerHTML = "";

    guessinput.disabled = false;
    guessbtn.disabled = false;

    guessinput.value = "";

    guessinput.focus();
}

function checkGuess() {

    const userGuess = Number(guessinput.value);

    if (
        userGuess < 1 ||
        userGuess > 100 ||
        guessinput.value === ""
    ){
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (previousguesses.includes(userGuess)){

        message.textContent = "You already guess that number. Don't behave like ELIAS" ;
        return;
    }
    
}