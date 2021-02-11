const circleDiameter = 100;
// let circleX = 200;
// let circleY = 300;
const myCircle = [];
let startingX = 200;
let startingY = 100;
let startingId = 0;

function setup () {
  createCanvas(1000, 500);
  background(0);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
      ellipse(startingX, startingY, circleDiameter);
      myCircle.push({ x: startingX, y: startingY, id: startingId});
      startingX += 150;
      startingId++;
    }
    startingY += 150;
    startingX = 200;
  }

  console.log(myCircle);
}

// function draw () {
//   background('purple');
//   drawShape();
// }

// function drawShape() {
//     fill('limegreen');
//     noStroke();
//     // ellipse(circleX, circleY, circleDiameter);
// }

function mousePressed () {
  for (let j = 0; j < myCircle.length; j++) {
    const distance = dist(mouseX, mouseY, myCircle[j].x, myCircle[j].y);
    if (distance < circleDiameter / 2) {
      console.log('circle has been clicked', myCircle[j].id);
    }
  }

  // if(mouseX >= 0 && mouseX <= 100) {
  //     console.log('hit');
  // }
}
