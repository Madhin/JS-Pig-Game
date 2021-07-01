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
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
var currentScore = 0; //roll dice function

btnRoll.addEventListener("click", function () {
  var generateRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(generateRoll);
  dice.classList.remove("hidden");
  dice.src = "dice-".concat(generateRoll, ".png");

  if (generateRoll !== 1) {
    currentScore += generateRoll;
    current0.textContent = currentScore;
  }
});