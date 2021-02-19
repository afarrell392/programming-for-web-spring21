/* eslint-disable no-undef */
let rect1;
let rect2;

function setup () {
  createCanvas(600, 400);
  rect1 = new Rectangle(250, 150, 100, 100);
  rect2 = new Rectangle(200, 100, 50, 50);
}
// I couldn't figure out the for loop for drawing the rectangle. Among other attempts, I moved 'new Rectangle' into the draw function as a for loop, but I just couldn't seem to execute it.

function draw () {
  background(0);
  rect1.move();
  rect1.show();
  rect2.move();
  rect2.show();
}
// classes are new blocks of code that contain everything it means to be that object: functionality, data, etc. The class is the cookie cutter.
class Rectangle {
  constructor (x, y, w, h) {
    // 'this' keyword references the current object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move () {
    // the numbers in random are the speed at which the shape moves
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show () {
    stroke('purple');
    strokeWeight(10);
    noFill();
    rect(this.x, this.y, this.w, this.h);
  }
}
