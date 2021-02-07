/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let rotateBy = 20;
var createCanvas;
var background;

var userPrompt = window.prompt('Once the shape has started drawing, click to stop the drawing. To start it up again, click and hold down on the mouse. Release to stop drawing. Ready?', 'Yes!');

function setup () {
  createCanvas(800, 800);
  // background is here so it's not redrawn every single time the loop runs
  background(0);
  // default stroke color and weight
  //   stroke(255);
  //   strokeWeight(1);
  angleMode(DEGREES);
}

function makeArm (rotateBy) {
  const alt = Math.round(rotateBy / 360);
  console.log(alt);
  // randomize the stroke color
  const strokeColor = color(random(255), random(255), random(255));
  console.log(strokeColor);
  stroke(strokeColor);
  line(10, 20, 100 + alt, 100 - alt);
  // second line with a bent arm
  line(100, 300, 100 - alt, 100 + alt);
  // can do multiply or divide instead, or a different shape
}

function draw () {
  translate(400, 400);
  // rotates by x degrees
  rotate(rotateBy);
  makeArm(rotateBy);
  // rotating the canvas by x each time. Super tight when the number is low.
  rotateBy += 50;
}

// starts looping when the mouse is pressed
function mousePressed () {
  loop();
}

// stops looping when the mouse is released
function mouseReleased () {
  noLoop();
}

// // from demo

// function makeArm (rotateBy) {
//     let alt = Math.round(rotateBy / 360);
//     console.log(alt);
//   noFill();
//   stroke(255);
//   strokeWeight(1);
//   ellipse(150, 150 + alt, 150 - alt); // can do multiply or divide instead, or a different shape
// }

// function draw () {
//   // translate resets the center
//   translate(300, 300);
//   // rotates by x degrees
//   rotate(rotateBy);
//   makeArm(rotateBy);
//   // rotating the canvas by 5 each time
//   rotateBy += 5;
// }

// // stops looping when the mouse is pressed
// function mousePressed() {
//     noLoop();
// }
