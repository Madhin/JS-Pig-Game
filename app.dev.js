"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var score0 = document.querySelector("#score__0");
var score1 = document.querySelector("#score__1");
var dice = document.querySelector(".dice");
var btnNew = document.querySelector(".btn__new");
var btnRoll = document.querySelector(".btn__roll");
var btnHold1 = document.querySelector(".btn__hold1");
var btnHold2 = document.querySelector(".btn__hold2");
var current0 = document.querySelector("#current__0");
var current1 = document.querySelector("#current__1");
var player1 = document.querySelector(".player__0");
var player2 = document.querySelector(".player__1");
var scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
var currentScore = 0;
var activePlayer = 0; //roll dice function

btnRoll.addEventListener("click", function () {
  var generateRoll = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = "dice-".concat(generateRoll, ".png");

  if (generateRoll !== 1) {
    currentScore += generateRoll;
    console.log(currentScore);
    document.getElementById("current__".concat(activePlayer)).textContent = currentScore;
  } else {
    document.getElementById("current__".concat(activePlayer)).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle("player__active");
    player2.classList.toggle("player__active");
  }
});
btnHold1.addEventListener("click", function () {
  score0.textContent = currentScore;
  console.log(score0.textContent);

  if (score0.textContent >= 20) {
    player1.classList.add("player__winner");
    player2.classList.remove("player__active");
  } else {
    scores[0] += currentScore;
    activePlayer = 1;
    currentScore = 0;
    current0.textContent = currentScore;
    player2.classList.add("player__active");
    player1.classList.remove("player__active");
  }
});
btnHold2.addEventListener("click", function () {
  scores[1] += currentScore;
  score1.textContent = scores[1];
  console.log(scores[1]);
  activePlayer = 0;
  currentScore = 0;
  current1.textContent = currentScore;
  player1.classList.add("player__active");
  player2.classList.remove("player__active");
});
console.log(_typeof(scores[0]));

if (scores[0] >= 20) {
  player1.classList.add("player__winner");
}