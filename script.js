// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const clueSpeedUpTime = 50;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var timer;

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  console.log('start');
  clueHoldTime = 1000;

  for (var i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  }

  // swap the Start and Stop buttons
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById('stopBtn').classList.remove('hidden');
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  clearInterval(timer);

  document.getElementById('startBtn').classList.remove('hidden');
  document.getElementById('stopBtn').classList.add('hidden');
}

function lightButton(btn) {
  document.getElementById('button' + btn).classList.add('lit');
}
function clearButton(btn) {
  document.getElementById('button' + btn).classList.remove('lit');
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log('play single clue: ' + pattern[i] + ' in ' + delay + 'ms');
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= clueSpeedUpTime;
  handleGameTimer(3 * (progress + 1));
}

function handleGameTimer(timeLeft) {
  var timerText = document.getElementById('timer');
  timerText.innerHTML = 'Time: ' + timeLeft + 's';

  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      timerText.innerHTML = 'Time: ' + timeLeft + 's';
    } else {
      loseGame();
    }
  }, 1000);
}

function loseGame() {
  stopGame();
  alert('Game Over. You lost.');
}

function winGame() {
  stopGame();
  alert('Game Over. You won!');
}

function guess(btn) {
  console.log('user guessed: ' + btn);
  if (!gamePlaying) {
    return;
  }

  

  if (btn === pattern[guessCounter]) {
    if (guessCounter === progress) {
      if (progress === pattern.length - 1) {
        winGame();
      } else {
        progress++;
        clearInterval(timer);
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    mistakes++;
    if (mistakes === 3) {
      loseGame();
    } else {
      playClueSequence();
    }
  }

  
  

  // add game logic here
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 530,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
