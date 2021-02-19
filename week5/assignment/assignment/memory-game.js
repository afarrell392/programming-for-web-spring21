const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {
  
};
let cardBack;

function preload (){
  cardBack = loadImage('images/cardback.png');
}
function setup () {
  createCanvas(800, 600);
  background(0);
  // loop to create row and number of cards
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      // pushed card in to create new cookie
      cards.push(new Card(startingX, startingY));
      // increment
      startingX += 150;
    }
    startingY += 200;
    startingX = 50;
  }
}
function mousePressed () {
  // loop loops through all the cards.
  for (let k = 0; k < cards.length; k++) {
    if(cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped');
    }
  }
}

class Card {
  constructor (x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.face = DOWN;
    this.show();
  }

  // method.
  show () {
    if (this.face === DOWN) {
      fill('orange');
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardBack, this.x, this.y);
    } else {
      fill('green');
      rect(this.x, this.y, this.width, this.height, 10);
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
