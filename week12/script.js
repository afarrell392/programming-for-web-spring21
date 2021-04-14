let mySound;

function preload() {
  soundFormats('mp3', 'wav');
  mySound = loadSound('owl');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  mySound.setVolume(0.1);
  mySound.play();
}