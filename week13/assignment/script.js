// Where is the circle
let x, y;

function setup() {
  createCanvas(800, 800);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background('#b9f1fe');
  fill('#9ACD32');
  
  fill('#407294');
  arc(479, 800, 200, 200, PI, TWO_PI);
  fill(60);
  arc(279, 800, 100, 100, PI, TWO_PI);
  fill(130);
  arc(100, 800, 300, 300, PI, TWO_PI);
  fill('fff')
  ellipse(75, 680, 30, 30);
  ellipse(110, 675, 30, 30);
  fill(0)
  ellipse(75, 680, 10, 10);
  ellipse(110, 675, 10, 10);
  fill(130);
  arc(700, 800, 300, 300, PI, TWO_PI);
  fill('fff')
  ellipse(475, 732, 30, 30);
  ellipse(440, 732, 30, 30);
  fill(0)
  ellipse(475, 732, 10, 10);
  ellipse(440, 732, 10, 10);
  fill(255);
  
  noStroke();
  for (let i = 0; i < 5; i ++) {
    translate(10, 100);
    fill('#407294');
    ellipse(x, y, 30, 30);
  }
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 3;

//   // Reset to the bottom
  if (y < 0) {
    y = height;
}
}