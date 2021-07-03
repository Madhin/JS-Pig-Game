const score0 = document.querySelector("#score__0");
const score1 = document.querySelector("#score__1");
const dice = document.querySelector(".dice");
const btnRestart = document.querySelector(".btn__restart");
const btnNew = document.querySelector(".btn__new");
const btnRoll = document.querySelector(".btn__roll");
const btnHold1 = document.querySelector(".btn__hold1");
const btnHold2 = document.querySelector(".btn__hold2");
const current0 = document.querySelector("#current__0");
const current1 = document.querySelector("#current__1");
const player1 = document.querySelector(".player__0");
const player2 = document.querySelector(".player__1");
const scores = [0, 0];
const btns = document.querySelectorAll(".btn");
const piggy = document.querySelector(".piggy");
const piggy__h1 = document.querySelector(".piggy__h1");
const piggy__winner1 = document.querySelector(".piggy__winner1");
const piggy__winner2 = document.querySelector(".piggy__winner2");

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
piggy.classList.add("hidden");
btnNew.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

//roll dice function
btnRoll.addEventListener("click", () => {
  const generateRoll = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${generateRoll}.png`;
  if (generateRoll !== 1) {
    currentScore += generateRoll;
    console.log(currentScore);
    document.getElementById(`current__${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current__${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle("player__active");
    player2.classList.toggle("player__active");
  }
});

//hold buttons function
btnHold1.addEventListener("click", () => {
  score0.textContent = currentScore;
  console.log(score0.textContent);
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

btnHold2.addEventListener("click", () => {
  score1.textContent = currentScore;
  console.log(score1.textContent);
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
});

//restart function
btnRestart.addEventListener("click", () => {
  reset();
});

btnNew.addEventListener("click", () => {
  reset();
});

const reset = () => {
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
  document.getElementById(`current__0`).textContent = currentScore;
  document.getElementById(`current__1`).textContent = currentScore;
};
