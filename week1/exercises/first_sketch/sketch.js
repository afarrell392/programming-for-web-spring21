function setup () {
  createCanvas(windowWidth, windowHeight);
  background(255, 165, 0);
  stroke(248, 255, 54);
}

function draw () {
  if (mouseIsPressed) {
    fill(0, 255, 255);
  } else {
    fill(0, 153, 153);

  }
  ellipse(mouseX, mouseY, 200, 10);
}
