const myGamesList = [
  {
    title: 'Euchre',
    type: 'card',
    numberOfPlayers: '4',
    rating: '5 star',
    shortDescription: 'compete on teams of two to win more tricks than the opposing team.'
  },
  {
    title: 'Spoons',
    type: 'card',
    numberOfPlayers: '3-13',
    rating: '5 star',
    shortDescription: 'compete to collect four of a kind and grab a spoon. If they are last to realize there are no spoons left, they get a letter. First one to spell "SPOONS" is out.'
  },
  {
    title: 'Kemps',
    type: 'card',
    numberOfPlayers: '4-12',
    rating: '5 star',
    shortDescription: 'compete on teams to two to individually collect four of a kind. They must secretly communicate their match to their partner to win a point.'
  }
];

// console.log(myGamesList);

const gameChoice = window.prompt(
    'I have three games in my collection. Pick a number between 1 and 3 and I\'ll tell you about that game.'
  );

window.alert(
  'You selected ' +
  myGamesList[gameChoice - 1].title +
    ', which is a ' +
    myGamesList[gameChoice - 1].type +
    ' game with a ' +
    myGamesList[gameChoice - 1].rating +
    ' rating where ' +
    myGamesList[gameChoice - 1].numberOfPlayers +
    ' players ' +
    myGamesList[gameChoice - 1].shortDescription
);
