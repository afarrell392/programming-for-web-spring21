
function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  background (102, 0, 51)
  fill(255, 153, 204)
  circle(mouseX, mouseY, pmouseX, pmouseY)
  fill(255, 0, 157)
  for (let circleY = 100; circleY <= 1000; circleY += 100) {
    for (let circleX = 100; circleX <= 1000; circleX += 100) {
      circle(circleX, circleY, 75);
    }
  }
}