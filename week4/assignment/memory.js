let startingX = 100;
let startingY = 100;
const rectWidth = 200;
const rectHeight = 300;
const myRect = [];
let startingId = 0;

function setup () {
  createCanvas(1400, 950);
  background(0);
  //   the K indicates the row; the i is the number of rectangles
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myRect.push({ x: startingX, y: startingY, id: startingId });
      startingX += 300;
      startingId++;
    }
    startingY += 400;
    startingX = 100;
  }

  console.log(myRect);
}

function mousePressed () {
  for (let j = 0; j < myRect.length; j++) {
    if (mouseX >= myRect[j].x && mouseX < myRect[j].x + rectWidth && mouseY > myRect[j].y && mouseY < myRect[j].y + rectHeight) {
      console.log('rect has been hit', myRect[j].id);
    }
  }
}

// below is the function before adding in the array

// function mousePressed () {
//   for (let j = 0; j < myRect.length; j++) {
//     if (mouseX >= startingX && mouseX < startingX + rectWidth && mouseY > startingY && mouseY < startingY + rectHeight) {
//       console.log('rect has been hit', myRect[j].id);
//     }
//   }
// }
