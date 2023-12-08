'use strict';
//variables
let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrent = document.getElementById('current--0');
let playerTwoCurrent = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let again = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');
let playerOneClass = document.querySelector('.player--0');
let playerTwoClass = document.querySelector('.player--1');
let totalScores, currentScore, activePlayer, playing;

// functions
const reset = function () {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
  playerOneCurrent.innerHTML = 0;
  playerTwoCurrent.innerHTML = 0;
  dice.style.display = 'none';
  playerOneClass.classList.remove('player--winner');
  playerTwoClass.classList.remove('player--winner');
  playerOneClass.classList.add('player--active');
  playerTwoClass.classList.remove('player--active');
};

// switching players function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneClass.classList.toggle('player--active');
  playerTwoClass.classList.toggle('player--active');
};
// random szám generátor
const random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // Math.trunc(Math.random() * 6) + 1;
};

// reset event listener
again.addEventListener('click', function () {
  reset();
});

// roll event listener
rollDice.addEventListener('click', () => {
  if (playing) {
    const randomNumber = random(1, 6);
    dice.style.display = 'block';
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
reset();

let lista = [1, 2];

let obj = {
  adatok: lista,
};

let objCopy = obj.copy();
objCopy.adatok[0] = 3;

// array-jel
/*
var images = new Array();

images[0] = 'dice-1.png';
images[1] = 'dice-2.png';
images[2] = 'dice-3.png';
images[3] = 'dice-4.png';
images[4] = 'dice-5.png';
images[5] = 'dice-6.png';

rollDice.addEventListener('click', () => {
  var kepHelye = document.querySelector('.dice');
  const randomNumber = random(1, 6);
  kepHelye.src = images[randomNumber - 1];
  dice.style.display = 'block';
});
*/
