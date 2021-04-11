function setup() {
  createCanvas(800, 800);
}
function draw() {
  if (mouseIsPressed) {
    stroke(100);
    background(10, 10, 10);
    fill(255, 255, 10)
  }
  else {
    stroke(30, 30, 10);
    background(204, 238, 255);
    fill(255, 255, 255)
    
  }
  for (let squareY = 300; squareY <= 800; squareY += 75) {
    for (let squareX = 75; squareX <= 225; squareX += 75) {
      square(squareX, squareY, 60);
    }
    strokeWeight(30);
  }
}
