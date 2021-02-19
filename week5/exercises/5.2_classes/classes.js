/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
let rectArray = [];

function setup () {
  createCanvas(600, 400);
  for (let i = 0; i < 6; i++) {
    const rect = new Rectangle(200, 200, 25, 25);
    rectArray.push(rect);
  }
}
function draw () {
  background(0);
  for (let k = 0; k < 5; k++) {
    rectArray[k].move();
    rectArray[k].show();
  }
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
    strokeWeight(7);
    noFill();
    rect(this.x, this.y, this.w, this.h);
  }
}
