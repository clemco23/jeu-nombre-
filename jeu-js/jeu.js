
let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber);
let maxTry = 10;


let guessField = document.getElementById('guessField');
let guessSubmit = document.getElementById('guessSubmit');
let reset = document.getElementById('reset');
let guesses = document.getElementById('guesses');
let lastResult = document.getElementById('lastResult');
let lowOrHigh = document.getElementById('lowOrHigh');



guessSubmit.addEventListener("click", function() {
    let guess = (guessField.value);
    maxTry--;
    if (guess == randomNumber) {
        lowOrHigh.textContent = "bien joué";
        document.body.style.background = "green";
    } else if (guess > randomNumber) {
        lowOrHigh.textContent = "trop haut";
        guesses.textContent =  maxTry + " essais restant";
    } else {
        lowOrHigh.textContent = "trop bas";
        guesses.textContent = maxTry + " essais restant";
    }

    if(maxTry == 0) {
        lowOrHigh.textContent = "perdu !";
        guessField.disabled = true;
        guessSubmit.disabled = true;
        document.body.style.background = 'red';
    }

    if (guess > 100) {
        lowOrHigh.textContent = "attention seulement un nombre compris entre 1 et 100";
    }

    if (guess < 0) {
        lowOrHigh.textContent = "attention seulement un nombre positif";
    }
    

});



reset.addEventListener("click", function(){
    maxTry = 10;
    randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    guessField.value = "";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    lowOrHigh.textContent = " ";
    document.body.style.background = false;
    guesses.textContent = "";

});









