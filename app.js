const score0 = document.querySelector("#score__0");
const score1 = document.querySelector("#score__1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn__new");
const btnRoll = document.querySelector(".btn__roll");
const btnHold1 = document.querySelector(".btn__hold1");
const btnHold2 = document.querySelector(".btn__hold2");
const current0 = document.querySelector("#current__0");
const current1 = document.querySelector("#current__1");
const player1 = document.querySelector(".player__0");
const player2 = document.querySelector(".player__1");
const scores = [0, 0];
score0.innerHTML = 0;
score1.innerHTML = 0;
dice.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

//roll dice function
btnRoll.addEventListener("click", () => {
  const generateRoll = Math.floor(Math.random() * 6) + 1;
  console.log(generateRoll);
  dice.classList.remove("hidden");
  dice.src = `dice-${generateRoll}.png`;
  if (generateRoll !== 1) {
    currentScore += generateRoll;
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

btnHold1.addEventListener("click", () => {
  scores[0] = current0.textContent;
  score0.textContent = scores[0];
  console.log(scores[0]);
  activePlayer = 1;
  currentScore = 0;
  player2.classList.add("player__active");
  player1.classList.remove("player__active");
});
