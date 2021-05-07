/* eslint-disable no-new */
// let sound1, sound2, sound3, sound4, sound5;
// let egg, barredOwl, cardinal, chickadee, hermitThrush, loon;

// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
  title: 'Quiz: Birds of a Feather',
  questions: [
    {
      text: 'Press 1. What bird do you think it is?',
      responses: [
        { text: 'Screech Owl' },
        { text: 'Barred Owl', correct: true }
      ]
    }, {
      text: 'Press 2. What bird do you think it is?',
      responses: [
        { text: 'Cardinal', correct: true },
        { text: 'Robin' }
      ]
    },
    {
      text: 'Press 3. What bird do you think it is?',
      responses: [
        { text: 'Chickadee', correct: true },
        { text: 'Tufted Titmouse' }
      ]
    },
    {
      text: 'Press 4. What bird do you think it is?',
      responses: [
        { text: 'Alpine Thrush' },
        { text: 'Hermit Thrush', correct: true }
      ]
    },
    {
      text: 'Press 5. What bird do you think it is?',
      responses: [
        { text: 'Eider' },
        { text: 'Loon', correct: true }
      ]
    }
  ]
};

new Vue({
  el: '#app',
  data: {
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false)
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    next: function () {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function () {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      return this.userResponses.filter(function (val) { return val }).length;
    }
  }
});

function preload () {
  soundFormats('wav');
  sound1 = loadSound('lib/sounds/barred-owl.wav'),
  sound2 = loadSound('lib/sounds/cardinal.wav'),
  sound3 = loadSound('lib/sounds/chickadee.wav'),
  sound4 = loadSound('lib/sounds/hermit-thrush.wav'),
  sound5 = loadSound('lib/sounds/loon.wav'),
  egg = loadImage('lib/imgs/240-300/birdeggs.jpg'),
  barredOwl = loadImage('lib/imgs/240-300/barred-owl.jpg'),
  cardinal = loadImage('lib/imgs/240-300/cardinal.jpg'),
  chickadee = loadImage('lib/imgs/240-300/chickadee.jpg'),
  hermitThrush = loadImage('lib/imgs/240-300/hermit-thrush.jpg'),
  loon = loadImage('lib/imgs/240-300/loon.jpg')
}

function setup () {
  createCanvas(1550, 1000);
}
function draw () {
  // remove the background for the image to stay on the page
  background('#fcf9f0');
  fill('#ccc');

  if (sound1.isPlaying() === true) {
    image(barredOwl, 100, 100);
  }
  if (sound2.isPlaying() === true) {
    image(cardinal, 100, 100);
  }
  if (sound3.isPlaying() === true) {
    image(chickadee, 100, 100);
  }
  if (sound4.isPlaying() === true) {
    image(hermitThrush, 100, 100);
  }
  if (sound5.isPlaying() === true) {
    image(loon, 100, 100);
  }
}
// key press to call sound
function keyPressed () {
  if (key === '1') {
    sound1.play();
  } else if (key === '2') {
    sound2.play();
  } else if (key === '3') {
    sound3.play();
  } else if (key === '4') {
    sound4.play();
  } else if (key === '5') {
    sound5.play();
  }
}
