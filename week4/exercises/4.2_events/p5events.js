let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
document.body.style.cursor = 'pointer'; // turns the pointer to the hand the entire time, but it's a step

function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

function draw () {
  background('purple');
  drawShape();
  textSize(28);
  rectX += speed;
  if (rectX > width) {
    noLoop();
    text('Your score was ' + clickCount, 100, 300);
  }
}

function mousePressed () {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape () {
  fill('limegreen');
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight);
}

/* TUESDAY DEMO

const circleDiameter = 100;
const myCircle = [];
let startingX = 200;
let startingY = 100;
let startingId = 0;

function setup () {
  createCanvas(500, 500);
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

//
// }

function mousePressed () {
  for (let j = 0; j < myCircle.length; j++) {
    const distance = dist(mouseX, mouseY, myCircle[j].x, myCircle[j].y);
    if (distance < circleDiameter / 2) {
      console.log('circle has been clicked', myCircle[j].id);
    }
*/
