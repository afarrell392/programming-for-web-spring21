/* eslint-disable no-undef */
let blockX = 0;
let blockY = 0;
let blockColor = 25;
let drawTimer;
// lower numbers are faster
const speed = 10;
// how much the block is moved on the y axis
const distance = 2;
function setup () {
  createCanvas(500, 500);
  background(0);
  drawBlock(blockX, blockY, 255);
}
// keyTyped (key) vs keyPressed (keyCode) gives you the actual key, rather than a number.
function keyTyped () {
  let keyToNumber = Number(key);
  // if a number isn't pressed, just return instead of showing an error
  if (isNaN(keyToNumber)) {
    return;
  }
  // the 1 and the 9 define the low and high numbers of the input, 1 and 255 define the low and high numbers of the output (color, in this case)
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
}

function drawBlock (x, y, color) {
  // short circuit condition: if color doesn't exist, it defaults to the color that follows the pipes (|| - this is the OR operator)
  fill(color || 230);
  rect(x, y, 50);
}
window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY - 50 > height && blockX - 50 > width) {
      // cancels the timer
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500)
//  drawTimer is a global variable so we can pass it into the clearInterval function. First argument is a function and the second is a time interval in milliseconds. setInterval executes the function and continues to until it's cleared