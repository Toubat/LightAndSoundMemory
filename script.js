// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById("stopBtn").classList.remove("hidden");
}

function stopGame() {
  gamePlaying = false;
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById("stopBtn").classList.remove("hidden");
}
