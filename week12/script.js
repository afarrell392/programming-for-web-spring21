function preload() {
  soundFormats ('wav');
  sound1 = loadSound('owl');
}

function setup() {
  cnv = createCanvas(500, 500);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(0);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  fill(200, 21, 20)
  ellipse(width/2, height/2, size, size);
}

function toggleSound() {
  if (sound1.isPlaying()) {
    sound1.stop();
  } else {
    sound1.play();
  }
}
