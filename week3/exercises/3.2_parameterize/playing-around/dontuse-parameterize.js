/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function setup () {
  createCanvas(600, 600);
  noStroke();
}

function createTile (originX, originY, backgroundColor, strokeColor, circleColor) {
  translate(originX, originY);
  fill(backgroundColor);
  rect(0, 0, 200, 200);
  fill(circleColor);
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
  stroke(strokeColor);
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
  noLoop();
  // xAxis
  // for (let xAxis = 0; xAxis < 600; xAxis += 200) {
  //   // yAxis
  //   for (let yAxis = 0; yAxis < 600; yAxis += 200) {
  //     createTile(xAxis, yAxis, 200, '#b2d8d8', '#008080', '#66b2b2');
  //   }
  // }
}

//   createTile(0, 0, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(200, -400, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(200, -400, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
//   createTile(0, 200, '#b2d8d8', '#008080', '#66b2b2');
// }

// trying loops, not being successful
