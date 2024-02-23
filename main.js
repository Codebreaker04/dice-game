let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const userInput = document.querySelector('#input');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPara');

let playGame = true;
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validInput(guess);
    });
}
function validInput(guess){
    if(isNaN(guess)){
        alert(`Enter valid input`);
    } else if(guess > 100){
        alert(`Enter a number smaller than 100`);
    } else if(guess < 1){
        alert(`Enter a number greater than 1`);
    } else{
        prevGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMesssage(`Game Over`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMesssage(`you guessed it right`);
        endGame();
    } else if(guess > randomNumber){
        displayMesssage(`your guess is too High`);
    } else if(guess < randomNumber){
        displayMesssage(`your guess is to Low`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guesses.innerHTML += `  ${guess}, `;
    numGuess++;
    remaining.innerHTML = `  ${11 - numGuess}`;
}

function displayMesssage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        prevGuess = [];
        numGuess = 1;
        guesses.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = ` ${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(randomNumber);
  
      playGame = true;
    });
}               