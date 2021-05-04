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
let cardsoundArray = [];
let cardBack;
let cardsoundArray = [];

function preload () {
  cardBack = loadImage('lib/imgs/240-300/birdeggs.jpg');
  // cardsoundArray = [
  //   loadImage('lib/imgs/240-300/barred-owl.jpg'),
  //   loadImage('lib/imgs/240-300/cardinal.jpg'),
  //   loadImage('lib/imgs/240-300/chickadee.jpg'),
  //   loadImage('lib/imgs/240-300/hermit-thrush.jpg'),
  //   loadImage('lib/imgs/240-300/loon.jpg')
  // ]
  soundFormats('wav');
  cardsoundArray = [
   loadSound('barred-owl'),
  loadSound('cardinal'),
  loadSound('chickadee'),
   loadSound('hermit-thrush'),
    loadSound('loon')
  ]
}

function setup () {
  cnv = createCanvas(1550, 1000);
  let selectedSounds = [];
  for (let z = 0; z < 5; z++) {
    const randomIdx = floor(random(cardsoundArray.length));
    const sound = cardsoundArray[randomIdx];
    selectedSounds.push(sound);
    selectedSounds.push(sound);
    // remove the used cardsound so it doesn't get randomly seleted again
    cardsoundArray.splice(randomIdx, 1);
  }
  selectedSounds = shuffleArray(selectedSounds);
  // loop to create row and number of cards
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      // pop returns the selected item that was removed
      const soundImage = selectedSounds.pop();
      // pushed card in to create new cookie
      cards.push(new Card(startingX, startingY, soundImage));
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
    text('you win!!!', 330, 700);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].sound = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#799c4b');
  textSize(30);
  text('attempts: ' + gameState.attempts, 50, 830);
  text('matches: ' + gameState.numMatched, 50, 880);
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
    if (gameState.flippedCards[0].cardsoundImg === gameState.flippedCards[1].cardsoundImg) {
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
  constructor (x, y, cardsoundImg) {
    // properties
    this.x = x;
    this.y = y;
    this.width = 240;
    this.height = 300;
    this.sound = DOWN;
    this.cardsoundImg = cardsoundImg;
    this.isMatch = false;
    this.show();
  }

  // method.
  show () {
    if (this.sound === UP || this.isMatch) {
      fill('pink');
      rect(this.x, this.y, this.width, this.height);
      image(this.cardsoundImg, this.x, this.y);
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
    if (this.sound === DOWN) {
      this.sound = UP;
    } else {
      this.sound = DOWN;
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
