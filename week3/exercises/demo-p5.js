let heading;
let button;
let input;
let message = 'type message to change me';

// using the DOM library for
function sayMessage () {
  message = input.value();
  input.value('');
}

function setup () {
  createCanvas(800, 600);
  background('lightblue');
  heading = createElement('h2', ['howdy']);
  heading.position(100, 200);
  button = createButton('alert message');
  button.size(150, 20);
  button.position(100, 275);
  button.mousePressed(sayMessage);
  input = createInput('');
  input.position(100, 250);
}

function draw () {
  background('lightblue');
  textSize(28);
  fill('purple');
  text(message, 100, 400);
}
// making buttons
