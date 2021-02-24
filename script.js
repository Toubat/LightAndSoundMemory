// Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const listSize = 8;

// Global Variables
var pattern;
var mistakes = 0;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // b.t. 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 500; //how long to hold each clue's light/sound

function getRandInt() {
  return Math.floor(Math.random() * 8) + 1;
}

function getListWithLength(length) {
  var list = [];
  for (let i = 0; i < length; i++){
    list.push(getRandInt());
  }
  console.log(list);
  return list;
}

function startGame() {
  // initialize game variables
  pattern = getListWithLength(listSize);
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  clueHoldTime = 500;
  // swap the Start and Stop buttons
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById('startBtn').classList.remove('hidden');
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){ 
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won!");
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392.00,
  6: 440.00,
  7: 493.88,
  8: 523.25,
}

function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone() {
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if (btn != pattern[guessCounter]) {
    if (mistakes == 2) {
      loseGame();
      stopGame();
      return;
    } else {
      mistakes++;
      alert('Wrong answer. You have made ' + mistakes + '/3 mistakes! Try Again from the beginning!');
      guessCounter = 0;
    }
  } else if (guessCounter < progress) {
    guessCounter++;
  } else if (progress != pattern.length - 1) {
    progress++;
    playClueSequence();
  } else {
    winGame();
    stopGame();
    return;
  }
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)