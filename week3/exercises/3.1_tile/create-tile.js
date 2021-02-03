// anna's tile
function setup () {
  createCanvas(200, 200);
}

function createTile () {
  translate(0, 0);
  fill('#536878');
  rect(0, 0, 200, 200);
  fill('coral');
  noStroke();
  circle(25, 25, 25);
  circle(50, 50, 25);
  circle(150, 150, 25);
  circle(175, 175, 25);
  circle(100, 100, 75);
  circle(175, 25, 25);
  circle(150, 50, 25);
  circle(50, 150, 25);
  circle(25, 175, 25);
  noFill();
  stroke('white');
  strokeWeight(5);
  // top left to bottom right
  rect(0, 0, 25, 25);
  rect(25, 25, 25, 25);
  rect(50, 50, 25, 25);
  rect(125, 125, 25, 25);
  rect(150, 150, 25, 25);
  rect(175, 175, 25, 25);
  // top right to bottom left
  rect(175, 0, 25, 25);
  rect(150, 25, 25, 25);
  rect(125, 50, 25, 25);
//   rect(100, 75, 25, 25);
//   rect(75, 100, 25, 25);
  rect(50, 125, 25, 25);
  rect(25, 150, 25, 25);
  rect(0, 175, 25, 25);
}

function draw () {
  createTile();
}

// exercise demo
/*
function setup () {
  createCanvas(200, 200);
}
function createTile () {
  translate(0, 0);
  fill('blue');
  rect(0, 0, 200, 200);
  stroke('white');
  strokeWeight(5);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
  noStroke();
  fill('yellow');
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
  noFill();
  stroke('purple');
  strokeWeight(5);
  circle(100, 100, 100);
}

function draw () {
  createTile();
}
*/
