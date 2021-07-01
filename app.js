const score0 = document.querySelector("#score__0");
const score1 = document.querySelector("#score__1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn__new");
const btnRoll = document.querySelector(".btn__roll");
const btnHold1 = document.querySelector(".btn__hold1");
const btnHold2 = document.querySelector(".btn__hold2");
const current0 = document.querySelector("#current__0");
const current1 = document.querySelector("#current__1");

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

let currentScore = 0;

//roll dice function
btnRoll.addEventListener("click", () => {
  const generateRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(generateRoll);
  dice.classList.remove("hidden");
  dice.src = `dice-${generateRoll}.png`;
  if (generateRoll !== 1) {
    currentScore += generateRoll;
    current0.textContent = currentScore;
  }
});
