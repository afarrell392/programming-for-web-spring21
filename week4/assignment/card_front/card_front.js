function setup () {
  createCanvas(200, 300)
  background('#4a4f55');
}
function draw () {
    noStroke();
  // left side 1, green
  fill('#799c4b')
  rect(0, 60, 30, 30);
  // left side 2 and 3, blue
  fill('#007299')
  rect(20, 150, 30, 30);
  rect(50, 180, 30, 30);
  // bottom right, half off screen, green
  fill('#799c4b');
  rect(120, 280, 30, 30);
  rect(150, 250, 30, 30);
  // topmost, blue
  fill('#007299')
  rect(100, 0, 30, 30);
  // right side 2 and 3, yellow
  fill('#f2d13d');
  rect(130, 90, 30, 30);
  rect(160, 120, 30, 30);
  // left side 4, yellow
  fill('#f2d13d');
  rect(30, 250, 30, 30);
}
