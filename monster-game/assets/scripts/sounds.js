const playerAudio = new Audio("assets/sounds/sword.mp3");
const playerHardAudio = new Audio("assets/sounds/heavy.mp3");
const healAudio = new Audio("assets/sounds/heal.mp3");
const music = new Audio("assets/sounds/sound.mp3");

playerHardAudio.load();
playerAudio.load();
healAudio.load();

music.volume = 0.1;
music.autoplay = true;

let isMusicLooping = false;

function startMusic() {
  if (!isMusicLooping) {
    music.play();
    isMusicLooping = true;
  }
}

function playAudio(audio) {
  startMusic();
  audio.play();
}

function playPlayerAudio() {
  playAudio(playerAudio);
}

function playPlayerHardAudio() {
  playAudio(playerHardAudio);
}

function playHealAudio() {
  playAudio(healAudio);
}
