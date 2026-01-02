let words = ["html", "css", "javascript", "browser", "frontend"];
let score = 0;
let timeLeft = 30;
let currentWord = "";
let timer;

function startGame() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  score = 0;
  timeLeft = 30;
  updateWord();
  startTimer();
}

function updateWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("wordDisplay").innerText = currentWord;
  document.getElementById("userInput").value = "";
}

document.getElementById("userInput").addEventListener("input", () => {
  if (document.getElementById("userInput").value === currentWord) {
    score += 10;
    document.getElementById("score").innerText = score;
    updateWord();
  }
});

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("gameOverScreen").classList.remove("hidden");
  document.getElementById("finalScore").innerText = score;
}

function restartGame() {
  document.getElementById("gameOverScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}
