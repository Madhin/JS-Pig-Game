"use strict";

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
score0.innerHTML = 0;
score1.innerHTML = 0;
dice.classList.add("hidden");
var currentScore = 0;
var activePlayer = 0; //roll dice function

btnRoll.addEventListener("click", function () {
  var generateRoll = Math.floor(Math.random() * 6) + 1;
  console.log(generateRoll);
  dice.classList.remove("hidden");
  dice.src = "dice-".concat(generateRoll, ".png");

  if (generateRoll !== 1) {
    currentScore += generateRoll;
    document.getElementById("current__".concat(activePlayer)).textContent = currentScore;
  } else {
    document.getElementById("current__".concat(activePlayer)).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle("player__active");
    player2.classList.toggle("player__active");
  }
});