const questionArray = [
  { question: 'Which two US states don\'t observe Daylight Savings Time?', answer: 'Arizona and Hawai\'i' },
  { question: 'In which two states were the first stop signs posted in 1915?', answer: 'Michigan and Nebraska' },
  { question: 'What was the original name of the settlement that became St. Paul, MN?', answer: 'Pig\'s Eye' },
  { question: 'What percent of the country\'s toothpick supply is produced in Maine?', answer: '90%' },
  { question: 'Which state was the first to enact laws protecting working women?', answer: 'Ohio, in 1852' }
];
console.log(questionArray);
// randomize
const randomNumber = Math.round(Math.random() * (questionArray.length - 1));
console.log(questionArray[randomNumber]);
// prompt user with question
const questionAnswer = window.prompt(questionArray[randomNumber].question);
console.log(questionAnswer);
// you answered alert
window.alert('You answered ' + questionAnswer + '.' + ' The correct answer is ' + questionArray[randomNumber].answer + '.');
