"use strict";

var score0 = document.querySelector("#score__0");
var score1 = document.querySelector("#score__1");
var dice = document.querySelector(".dice");
var btnRestart = document.querySelector(".btn__restart");
var btnNew = document.querySelector(".btn__new");
var btnRoll = document.querySelector(".btn__roll");
var btnHold1 = document.querySelector(".btn__hold1");
var btnHold2 = document.querySelector(".btn__hold2");
var current0 = document.querySelector("#current__0");
var current1 = document.querySelector("#current__1");
var player1 = document.querySelector(".player__0");
var player2 = document.querySelector(".player__1");
var scores = [0, 0];
var btns = document.querySelectorAll(".btn");
var piggy = document.querySelector(".piggy");
var piggy__h1 = document.querySelector(".piggy__h1");
var piggy__winner1 = document.querySelector(".piggy__winner1");
var piggy__winner2 = document.querySelector(".piggy__winner2");
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
piggy.classList.add("hidden");
btnNew.classList.add("hidden");
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
}); //hold buttons function

btnHold1.addEventListener("click", function () {
  scores[0] += currentScore;
  score0.textContent = scores[0];
  currentScore = 0;

  if (score0.textContent >= 50) {
    player1.classList.add("player__winner");
    player2.classList.add("player__winner");
    player2.classList.remove("player__active");
    btnRoll.disabled = true;
    piggy.classList.remove("hidden");
    piggy__h1.style.display = "block";
    piggy__winner1.style.display = "block";
    btnNew.classList.remove("hidden");
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
  currentScore = 0;

  if (score1.textContent >= 50) {
    player1.classList.add("player__winner");
    player2.classList.add("player__winner");
    player1.classList.remove("player__active");
    btns.disabled = true;
    piggy.classList.remove("hidden");
    piggy__h1.style.display = "block";
    btnNew.classList.remove("hidden");
    piggy__winner2.style.display = "block";
  } else {
    scores[1] += currentScore;
    activePlayer = 0;
    currentScore = 0;
    current1.textContent = currentScore;
    player1.classList.add("player__active");
    player2.classList.remove("player__active");
  }
}); //restart function

btnRestart.addEventListener("click", function () {
  reset();
});
btnNew.addEventListener("click", function () {
  reset();
});

var reset = function reset() {
  currentScore = 0;
  activePlayer = 0;
  score1.textContent = currentScore;
  score0.textContent = currentScore;
  player1.classList.add("player__active");
  player2.classList.remove("player__active");
  dice.classList.add("hidden");
  piggy.classList.add("hidden");
  btnNew.classList.add("hidden");
  piggy__h1.style.display = "none";
  piggy__winner1.style.display = "none";
  piggy__winner2.style.display = "none";
  player1.classList.remove("player__winner");
  player2.classList.remove("player__winner");
  document.getElementById("current__0").textContent = currentScore;
  document.getElementById("current__1").textContent = currentScore;
};