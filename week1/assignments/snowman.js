/* eslint-disable no-undef-init */
/* eslint-disable no-undef */
// var img; 

// function preload() {
//   img = loadImage('100px_grid.png');
// }

let grid = undefined;
let stroke1 = prompt('enter a basic color name in lower case', 'gray');
let stroke2 = prompt('enter another basic color in lowercase', 'green');
let stroke3 = prompt('enter another basic color in lowercase', 'yellow');

function setup () {
  createCanvas(1000, 800);
  background('#3299CC');
//   grid = loadImage('100px_grid.png');
}
function draw () {
//   image(img, 0, 0);
  // hills
  noStroke();
  fill('white');
  ellipse(200, 600, 800, 600);
  ellipse(700, 700, 800, 400);
  // adult snowcreature 
  fill('#f1f1f1');
  strokeWeight(20);
  stroke(stroke1);
  // body bottom
  ellipse(500, 700, 450, 450);
  // body middle
  ellipse(500, 450, 300, 300);
  // head
  ellipse(500, 200, 200);
  // arm left
  stroke('#A67B5B');
  strokeWeight(10);
  line(200, 300, 350, 400);
  // arm right
  line(650, 400, 800, 300);
  // hat brim
  stroke(stroke2);
  strokeWeight(40);
  line(400, 120, 600, 120);
  // hat body
  fill('green');
  quad(400, 50, 600, 50, 550, 120, 450, 120);
  // eyes
  stroke(0);
  strokeWeight(50);
  point(425, 200);
  point(575, 200);
  // mouth
  strokeWeight(10);
  noFill();
  arc(500, 200, 80, 80, 0, HALF_PI);
  // baby snowcreature
  fill('#f1f1f1');
  strokeWeight(10);
  stroke(stroke1);
  // body bottom
  ellipse(900, 750, 150, 150);
  // body middle
  ellipse(900, 650, 100, 100);
  // head
  ellipse(900, 575, 70, 70);
  // arm left
  stroke('#A67B5B');
  strokeWeight(5);
  line(800, 600, 850, 650);
  // arm right
  line(900, 650, 800, 600);
  // hat
  stroke(stroke3);
  strokeWeight(10);
  fill('yellow');
  triangle(877, 530, 922, 495, 922, 540);
  // pom
  stroke('red');
  strokeWeight(20);
  point(929, 480);
  // eyes
  stroke(0);
  strokeWeight(10);
  point(900, 570);
  point(875, 560);
  // mouth
  strokeWeight(2);
  noFill();
  arc(880, 585, 30, 10, 0, HALF_PI);
  // present
  stroke(139, 0, 0);
  strokeWeight(5);
  fill(139, 0, 0);
  rect(780, 580, 20, 20);
  // ribbon
  stroke('green');
  strokeWeight(3);
  line(780, 590, 800, 590);
  line(790, 580, 790, 600);
  // tree
  fill('green');
  triangle(100, 250, 150, 350, 50, 350);
  triangle(100, 200, 140, 275, 60, 275);
  triangle(100, 150, 130, 225, 70, 225);
  // snow
  strokeWeight(15);
  stroke('white');
  point(200, 100);
  point(800, 400);
  point(900, 200);
  point(50, 250);
  point(550, 50);
  point(625, 250);
}
