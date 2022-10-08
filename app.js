const choices = ["Rock", "Paper", "Scissors"];
const btn = document.querySelectorAll("button");
let result;
let newChoice;
let totalScore = document.getElementById("player-score");
const reset = document.getElementById("endGameButton");
let totalScoreDisplay = 0;
//Button Section

btn.forEach((button) => {
  button.addEventListener("click", (eachButton) => {
    result = eachButton.target.value;
    randomChoice();
    logic();
    resetGame();
  });
});
//Computer Section

function randomChoice() {
  i = Math.floor(Math.random() * choices.length);
  newChoice = choices[i];
}
// logical Side

function logic() {
  if (newChoice === result) {
    totalScoreDisplay;
  }
  if (newChoice === "Paper" && result === "Rock") {
    totalScoreDisplay--;
  }
  if (newChoice === "Rock" && result === "Scissors") {
    totalScoreDisplay--;
  }
  if (newChoice === "Scissors" && result === "Paper") {
    totalScoreDisplay--;
  }
  if (result === "Paper" && newChoice === "Rock") {
    totalScoreDisplay++;
  }
  if (result === "Rock" && newChoice === "Scissors") {
    totalScoreDisplay++;
  }
  if (result === "Scissors" && newChoice === "Paper") {
    totalScoreDisplay++;
  }
  totalScore.innerHTML = totalScoreDisplay;
}

function resetGame() {
  reset.addEventListener("click", () => (totalScoreDisplay = 0));
  reset.removeEventListener("click");
}
