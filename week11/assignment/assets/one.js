function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0);
  strokeWeight(3);
  stroke(0, 149, 179);
}

function draw() {
  shearX(PI / 40.0);
  line(mouseX, mouseY, 450, 450);
}
