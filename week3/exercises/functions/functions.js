// declarative function with parameter
function logOutGreeting (greeting) {
  console.log(greeting);
}
logOutGreeting('salutations');

// functions help us isolate bits of related code.
// function to get stuff with concatination
function getStuff (ingredients) {
  console.log('get ' + ingredients);
}
getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

// old way of assinging a variable plus a loop! 'let' allows us to reassign values. 'const' does not.
const makeSandwich = function (ingredientArray) {
  for (let i = 0; i < ingredientArray.length; i++) {
    console.log('get', ingredientArray[i]);
  }
}
makeSandwich(['bread', 'mayo', 'tuna']);

// new way. Example of anonymous function. Acts a little differently than a declarative function.
const makeAnotherSandwich = (ingredientArray) => {
  for (let i = 0; i < ingredientArray.length; i++) {
    console.log('get', ingredientArray[i]);
  }
}
makeAnotherSandwich(['bread', 'mayo', 'tuna']);

// function is being replaced with number.
function makeRand (maxNumber) {
  const output = Math.ceil(Math.random() * maxNumber);
  return output;
}
const randomOutput = makeRand(100);
console.log(randomOutput);

// comparison expression. Returns True or False.
function checkLegality (age) {
  return age >= 21;
}
console.log(checkLegality(21));

const kensAge = 49;
if (checkLegality(kensAge)) {
  console.log('He is legal');
}

// scope references the values and functions and everthing that has been assigned within a certain scope. Functions live within blocks. 'this' 

const myObject = {
  x: 200,
  y: 400,
  getPosition: function () {
    console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
  }
}
myObject.getPosition();


const mySecondObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
      console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
    }
  }
  mySecondObject.getPosition();
  console.log(mySecondObject.x, mySecondObject.y);