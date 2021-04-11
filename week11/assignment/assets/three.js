let y;
let x;
let num = 80;
function setup() {
    createCanvas(displayHeight, displayWidth);
    background(201, 201, 18);
    noStroke();
}

function draw() {
fill(203, 203, 203);
y = 500;
for (let i = 0; i < num / 2; i++) {
    rect(50, y, 475, 10);
    y += 20;
}
fill(56, 45, 220);
y = 100;
for (let i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
}
fill(0, 77, 13);
y = 20;
for (let i = 0; i < num; i++) {
    rect(600, y, 100, 60);
    y += 100;
}
fill(0, 77, 13);
y = 0;
for (let i = 0; i < num; i++) {
    rect(700, y, 50, 60);
    y += 100;
}
fill(0, 77, 13);
y = -20;
for (let i = 0; i < num; i++) {
    rect(750, y, 25, 60);
    y += 100;
}
fill(255,77, 30);
x = 0;
for (let i = 0; i < num / 4; i++) {
    rect(x, 240, 50, 20);
    x += 80;
}
fill(255, 25, 140);
x = 0;
for (let i = 0; i < num / 4; i++) {
    rect(x, 100, 35, 30);
    x += 90;
}
}