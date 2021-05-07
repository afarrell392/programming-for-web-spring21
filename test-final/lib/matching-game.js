let sound1, sound2, sound3, sound4, sound5;
var barredOwl, cardinal, chickadee, hermitThrush, loon;

function preload () {
  soundFormats('wav');
  sound1 = loadSound('lib/sounds/barred-owl.wav'),
  sound2 = loadSound('lib/sounds/cardinal.wav'),
  sound3 = loadSound('lib/sounds/chickadee.wav'),
  sound4 = loadSound('lib/sounds/hermit-thrush.wav'),
  sound5 = loadSound('lib/sounds/loon.wav'),
  barredOwl = loadImage('lib/imgs/240-300/barred-owl.jpg'),
  cardinal = loadImage('lib/imgs/240-300/cardinal.jpg'),
  chickadee = loadImage('lib/imgs/240-300/chickadee.jpg'),
  hermitThrush = loadImage('lib/imgs/240-300/hermit-thrush.jpg'),
  loon = loadImage('lib/imgs/240-300/loon.jpg')
}

function setup() {
  createCanvas(1550, 1000);
  noise = new p5.Noise();
  noise.start();
  noise.amp(0);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(40);
  noFill();

 // barred owl
 fill ('#cc3300')
 if (mouseIsPressed) {
  image (barredOwl, 100, 150);
 } else {rect (100, 150, 230, 300);
 }
  // cardinal
  fill ('#cc3300')

if (mouseIsPressed) {
  image (cardinal, 350, 150);
 } else {rect (350, 150, 230, 300);
 }


   // chickadee
   image (chickadee, 600, 150);

   // hermit thrush
  image (hermitThrush, 850, 150);

  // loon
  image (loon, 1100, 150);

  const level = amplitude.getLevel();

const levelHeight = map(level, 0, 1, 0, height);


if (sound1.isPlaying () === true) {
    fill ('#fff');
    rect (100, 150, 230, 300);
}
if (sound2.isPlaying () === true) {
  fill ('#ccc');
  rect (350, 150, 230, 300)
}
if (sound3.isPlaying () === true) {
    stroke('#FFFF00');
    square(270, 550, 30);
}
if (sound4.isPlaying () === true) {
    image (hermitThrush, 100, 500);
}
if (sound5.isPlaying () === true) {
    image (loon, 350, 500);
}
}
// key press to call sound
function keyPressed () {
  if (key === '1') {
    sound1.play();
  } else if (key === '2') {
    sound2.play();
  } else if (key === '3') {
    sound3.play();
  } else if (key === '4') {
    sound4.play();
  } else if (key === '5') {
    sound5.play();
  }   
}
