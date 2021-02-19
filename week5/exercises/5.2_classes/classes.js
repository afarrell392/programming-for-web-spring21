/* eslint-disable no-undef */
let rect1;
let rect2;
var i = 0;

function setup () {
  createCanvas(600, 400);
  rect1 = new Rectangle();
  rect2 = new Rectangle();
}

function draw () {
  background(0);
for (i = 0; i < 2; i++){
    rect1.move();
    rect1.show();
    rect2.move();
  rect2.show();
}
}
//   rect1.move();
//   rect1.show();
//   rect2.move();
//   rect2.show();
// }
// classes are new blocks of code that contain everything it means to be that object: functionality, data, etc. The class is the cookie cutter.
class Rectangle {
  constructor () {
    // 'this' keyword references the current object
    this.x = 200;
    this.y = 150;
  }

  move () {
    // the numbers in random are the speed at which the shape moves
    this.x = this.x + random(-7, 7);
    this.y = this.y + random(-7, 7);
  }

  show () {
    stroke('purple');
    strokeWeight(10);
    noFill();
    rect(this.x, this.y, 50, 50);
  }
}

// let bubble1;
// let bubble2;

// function setup () {
//   createCanvas(600, 400);
//   bubble1 = new Bubble();
//   bubble2 = new Bubble();
// }

// function draw () {
//   background(0);
//   bubble1.move();
//   bubble1.show();
//   bubble2.move();
//   bubble2.show();
// }
// // classes are new blocks of code that contain everything it means to be that object: functionality, data, etc. The class is the cookie cutter.
// class Bubble {
//   constructor () {
//     // 'this' keyword references the current object
//     this.x = 200;
//     this.y = 150;
//   }

//   move () {
//     this.x = this.x + random(-5, 5);
//     this.y = this.y + random(-5, 5);
//   }

//   show () {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x, this.y, 24, 24);
//   }
// }
