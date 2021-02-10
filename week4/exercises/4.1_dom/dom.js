/* Create a new headline element (h1 through h5 would work just fine). The text can be anything about llamas.
Append the new headline element to "myEmptyDiv".
And an event listener to your headline to change the background color of the whole window when the headline is clicked. */

// select empty div and assign to variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// take variable and put an h1 inside it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello, Class! It is a snowy day';
// append child to the DOM to view
myEmptyDiv.appendChild(heading);
