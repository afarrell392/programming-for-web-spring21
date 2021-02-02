// functions
// how to create a function
function greet () {
  console.log('hi class');
}
greet();
// a couple of reasons for functions
// delayed/deferred actions
// setTimeout(function () {
// console.log('hi class');
// }, 1000);
// organization
function makeBlackCircle () {
  fill('black');
  circle(50, 50, 100);
}
// reusability/ optimization (input)
function getStuff (stuff) {
  console.log('getting ' + stuff);
}

getStuff('bread');
getStuff('peanut butter');
getStuff('jelly');
// returning data
function getSum (numberA, numberB) {
  return numberA + numberB;
}
const mySum = getSum(4, 11);
console.log('this is the sum', mySum);

// functions as values in variables, properties, and arguments
const myLittleObject = {
  friendship: function () {
    console.log('is magic');
  }
}
myLittleObject.friendship();
// Loops!!!
// OG for loop
for(let i = 100; i<1000; i+=10) {
  console.log(i);
}
// for loop on an array

const myCars = ['acura', 'bentley', 'chevy'];
for (let j = 0; j < myCars.length; j++) {
  console.log('I wish i had a ' + myCars[j]);
}
// OG for-in loop for objects
// while loops
/* let myNum = 15;
while (myNum > 0) {
    console.log('I\'m still running!', myNum);
    myNum--;
}
*/

// functional loops
// for each
myCars.forEach(function (car) {
  console.log('functional', car);
})

// map
let myNewArray = myCars.map(function(car){
    return 'i like ' + car;
})
console.log(myNewArray, myCars);