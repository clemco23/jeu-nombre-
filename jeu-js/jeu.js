//1. générer un nombre aléatoire 
let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber);
let maxTry = 10;

//2. selesctionner les elements HTML (en js) pour pouvoir les manipuler plus tard 
let guessField = document.getElementById('guessField');
let guessSubmit = document.getElementById('guessSubmit');
let reset = document.getElementById('reset');
let guesses = document.getElementById('guesses');
let lastResult = document.getElementById('lastResult');
let lowOrHigh = document.getElementById('lowOrHigh');


//3. on va récuperer le nombre tappé dans l'input et vérifier si il est bon oui pas
guessSubmit.addEventListener("click", function() {
    //1. Récuperer la valeur du champ guessFiled
    let guess = (guessField.value);
    maxTry--;
    //2. On va tester si la variable est égale a randomNumber
    // if (guess == randomNumber) {
    //     console.log("gagné")
    //     lowOrHigh.textContent = "gagné";
    // }else {
    //     if(guess < randomNumber) {
    //         console.log("trop bas")
    //         lowOrHigh.textContent = "trop bas";
    //     }if (guess > randomNumber) {
    //         console.log("trop haut")
    //         lowOrHigh.textContent = "trop haut";
    //     }
    // }
//autre solution :
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

    

    
    
    //3. si oui, on a gagner, si trop élever, on affiche ça a l'utilisateur, sinon, on affiche trop bas 
    // réaliser la logique, donc, les if else, et si affichez des console.log a l'intérieur 
    //4. Nous devons maintenant gérer les 10 tentatives max 
    //5. créer une variable qui vaut 10 
    //6. lorsque on fait une tentative, on diminue de 1
    //7. lorsque notre variable vaut 0, on stoppe le jeu 
    //8. leNomDeVotreInput.dasabled = true;

    // maxTry--;
    // if ( maxTry == 0 )
    //     console.log("perdu"); 
    // else 
    //     console.log("il te reste " + maxTry + " essai");

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
// LE BOUTON RESET
    //1. Rajouter un evenement sur le bouton reset
    //2. On doit regénérer le nombre aléatoire
    //3. Réinitialiser le nombre de tentatives
    //4. reactiver les champs





