/* eslint-disable no-new */
let sound1, sound2, sound3, sound4, sound5;
let egg, barredOwl, cardinal, chickadee, hermitThrush, loon;

function preload () {
  soundFormats('wav');
  sound1 = loadSound('lib/sounds/barred-owl.wav'),
  sound2 = loadSound('lib/sounds/cardinal.wav'),
  sound3 = loadSound('lib/sounds/chickadee.wav'),
  sound4 = loadSound('lib/sounds/hermit-thrush.wav'),
  sound5 = loadSound('lib/sounds/loon.wav'),
  barredOwl = loadImage('lib/imgs/240-300/barred-owl.jpg'),
  cardinal = loadImage('lib/imgs/240-300/cardinal.jpg'),
  chickadee = loadImage('lib/imgs/240-300/chickadee.jpg'),
  hermitThrush = loadImage('lib/imgs/240-300/hermit-thrush.jpg'),
  loon = loadImage('lib/imgs/240-300/loon.jpg')
}

function setup () {
  createCanvas(1550, 1000);
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

var quiz = {
  title: 'Quiz: Birds of a Feather',
  questions: [
    {
      text: 'Press 1 to hear the bird. What bird do you think it is?',
      image: 'lib/imgs/240-300/barred-owl.jpg',
      responses: [
        { text: 'Screech Owl' },
        { text: 'Barred Owl', correct: true }
      ]
    }, {
      text: 'Press 2 to hear the bird. What bird do you think it is?',
      image: 'lib/imgs/240-300/cardinal.jpg',
      responses: [
        { text: 'Cardinal', correct: true },
        { text: 'Robin' }
      ]
    },
    {
      text: 'Press 3 to hear the bird. What bird do you think it is?',
      image: 'lib/imgs/240-300/chickadee.jpg',
      responses: [
        { text: 'Chickadee', correct: true },
        { text: 'Tufted Titmouse' }
      ]
    },
    {
      text: 'Press 4 to hear the bird. What bird do you think it is?',
      image: 'lib/imgs/240-300/hermit-thrush.jpg',
      responses: [
        { text: 'Alpine Thrush' },
        { text: 'Hermit Thrush', correct: true }
      ]
    },
    {
      text: 'Press 5 to hear the bird. What bird do you think it is?',
      image: 'lib/imgs/240-300/loon.jpg',
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
    image: '',
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // did the user answered correctly to the question n? "no".
    userResponses: Array(quiz.questions.length).fill(false)
  },
  methods: {
    // next question
    next: function () {
      this.questionIndex++;
    },
    // previous question
    prev: function () {
      this.questionIndex--;
    },
    // how many responses are true
    score: function () {
      return this.userResponses.filter(function (val) { return val }).length;
    }
  }
});
