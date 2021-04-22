/* eslint-disable no-undef */
var slider, slider2;
var pos, pos2;

function setup () {
  createCanvas(500, 500);
  angleMode(DEGREES);
  slider = createSlider(0, 15, 0);
  slider2 = createSlider(0, 15, 0);

  pos = 0.0;

  pos2 = 0.0;
}

function draw () {
  clear();
  fill('#FFCE00');
  background(0);
  translate(width / 2, height / 2);
  var mySinVal = sin(pos);
  var mySinVal2 = sin(pos2);

  amplified = mySinVal * 5;
  amplified2 = mySinVal2 * 5;

  for (x = 50; x <= 500; x = x + 1) {
    curve(0, 50, amplified, 200, amplified2, 4, 100, 5000);
    rotate(6);
  }
  pos = pos + slider.value()
  pos2 = pos2 + slider2.value()
};
