/* Create a new headline element (h1 through h5 would work just fine). The text can be anything about llamas.
Append the new headline element to "myEmptyDiv".
And an event listener to your headline to change the background color of the whole window when the headline is clicked. */

// select empty div and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// take variable and put an h1 inside it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'A baby llama is called a "cria" which is Spanish for baby. It\'s pronounced KREE-uh. Baby alpacas, vicuñas, and guanacos are also called crias. Mama llamas usually only have one baby at a time and llama twins are incredibly rare. Pregnancy lasts for about 350 days, nearly a full year. Crias weigh 20 to 35 pounds at birth.'; // source: https://www.thoughtco.com/fun-facts-about-llamas-3880940
heading.style.cursor = 'pointer'; // changes cursor to a pointer when you hover over the heading
heading.addEventListener('click', handleHeadingClick); // changes X when the heading is clicked (in this case, the background color)
myEmptyDiv.appendChild(heading); // append child to attach it the DOM to view
function handleHeadingClick () {
  document.body.style.backgroundColor = 'orange';
}
