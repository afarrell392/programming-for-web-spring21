let sound1, sound2, sound3, sound4, sound5;
// preload the music so it works when you want it to
function preload() {
  soundFormats('mp3', 'm4a');
  sound1 = loadSound('sound/sound1.mp3');
  sound2= loadSound ('sound/sound2.mp3');
  sound3 = loadSound ('sound/sound3.m4a');
  sound4 = loadSound ('sound/sound4.m4a');
  sound5 = loadSound ('sound/sound5.m4a');
}

function setup() {
  createCanvas (800, 500)
  noise = new p5.Noise();
  noise.start();
  noise.amp(0);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(40);
  noFill();
  strokeWeight('30');

  // arc blue
  stroke('#99c2ff');
  arc(400, 500, 500, 450, -PI, 0, 180);

  // arc green
  stroke('#b3ffb3');
  arc(400, 500, 550, 500, -PI, 0, 180);

  // arc yellow
  stroke('#ffffcc');
  arc(400, 500, 600, 550, -PI, 0, 180);

  // arc orange
  stroke('#ffebcc');
  arc(400, 500, 650, 600, -PI, 0, 180);

  // arc red
  stroke('#F08080');
  arc(400, 500, 700, 650, -PI, 0, 180);

  const level = amplitude.getLevel();

const levelHeight = map(level, 0, 1, 0, height);
strokeWeight(30);

if (sound1.isPlaying () === true) {
    stroke('#cc3300');
  arc(400, 500, 700, 650, -PI, 0, 180);
}
if (sound2.isPlaying () === true) {
    stroke('#ff9900');
  arc(400, 500, 650, 600, -PI, 0, 180);
}
if (sound3.isPlaying () === true) {
    stroke('#FFFF00');
  arc(400, 500, 600, 550, -PI, 0, 180);
}
if (sound4.isPlaying () === true) {
    stroke('#006600');
  arc(400, 500, 550, 500, -PI, 0, 180);
}
if (sound5.isPlaying () === true) {
    stroke('#0066ff');
  arc(400, 500, 500, 450, -PI, 0, 180);
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