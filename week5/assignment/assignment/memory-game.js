const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {
  totalPairs: 5,
  flippedCards:[],
  numMatched: 0,
  attempts: 0,
  waiting: false
};
let cardfaceArray = [];
let cardBack;

function preload () {
  cardBack = loadImage ('resized_images/cardback.png');
  cardfaceArray = [
    loadImage('resized_images/adultzfish2.png'),
    loadImage('resized_images/axolotl.png'),
    loadImage('resized_images/celegans.png'),
    loadImage('resized_images/killifish.png'),
    loadImage('resized_images/celeganscell.png')
  ]
}
function setup () {
  createCanvas(800, 600);
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
      startingX += 150;
    }
    startingY += 200;
    startingX = 50;
  }
}

function draw () {
  background('#007299'); 
  if (gameState.numMatched === gameState.totalPairs) {
    fill('#f2d13d');
    textFont('Impact');
    textSize(110);
    text('you win!!!', 330, 520);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if(!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#799c4b');
  textFont('Courier');
  textSize(30);
  text('attempts: ' + gameState.attempts, 50, 530);
  text('matches: ' + gameState.numMatched, 50, 480);
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
        loop ();
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
    this.width = 100;
    this.height = 150;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  // method.
  show () {
    if (this.face === UP || this.isMatch) {
      fill('green');
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
    if(this.face === DOWN) {
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
