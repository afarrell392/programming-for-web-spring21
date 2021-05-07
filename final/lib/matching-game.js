const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
const cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardfaceArray = [];
let cardBack;

function preload () {
  cardBack = loadImage('lib/imgs/240-300/birdeggs.jpg');
  cardfaceArray = [
    loadImage('lib/imgs/240-300/barred-owl.jpg'),
    loadImage('lib/imgs/240-300/cardinal.jpg'),
    loadImage('lib/imgs/240-300/chickadee.jpg'),
    loadImage('lib/imgs/240-300/hermit-thrush.jpg'),
    loadImage('lib/imgs/240-300/loon.jpg')
  ]
}
function setup () {
  cnv = createCanvas(1550, 1000);
  let selectedFaces = [];
  for (let z = 0; z < 5; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get randomly seleted again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  // loop to create row and number of cards
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      // pop returns the selected item that was removed
      const faceImage = selectedFaces.pop();
      // pushed card in to create new cookie
      cards.push(new Card(startingX, startingY, faceImage));
      // increment
      startingX += 300;
    }
    startingY += 400;
    startingX = 50;
  }
}

function draw () {
  background('#fcf9f0');
  if (gameState.numMatched === gameState.totalPairs) {
    fill('#f2d13d');
    textFont('Impact');
    textSize(110);
    text('you win!!!', 130, 900);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#78b0a2');
  textSize(20);
  text('Attempts: ' + gameState.attempts, 50, 830);
  text('Matches: ' + gameState.numMatched, 50, 880);
}

function mousePressed () {
  if (gameState.waiting) {
    return;
  }
  // loop loops through all the cards.
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length and then we can trigger the flip.
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      // if the cards match -- time to score
      // marks cards as matched so they don't flip back.
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      // loop timeout gives players a second to remember where the card is.
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

class Card {
  constructor (x, y, cardFaceImg) {
    // properties
    this.x = x;
    this.y = y;
    this.width = 240;
    this.height = 300;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  // method.
  show () {
    if (this.face === UP || this.isMatch) {
      fill('pink');
      rect(this.x, this.y, this.width, this.height);
      image(this.cardFaceImg, this.x, this.y);
    } else {
      fill('orange');
      rect(this.x, this.y, this.width, this.height);
      image(cardBack, this.x, this.y);
    }
  }

  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}