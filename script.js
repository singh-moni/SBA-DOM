// Cache elements
const header = document.getElementById('page-header');
const footer = document.querySelector('footer');

// Use parent-child-sibling relationship to navigate
const ingredientsList = document.querySelector('#ingredients ul');

// Iterate over a collection of elements
const ingredientItems = ingredientsList.querySelectorAll('li');
ingredientItems.forEach((item) => {
    // Add event listeners
    item.addEventListener('click', () => {
        console.log('Ingredient clicked');
    });
});
// Create new button element
const newButton = document.getElementById('newButton');
// HTML templating with cloneNode
const newInstruction = document.querySelector('#instructions ol li').cloneNode(true);
document.querySelector('#instructions ol').appendChild(newInstruction);




































// // Create new button element
// const newButton = document.createElement('button');
// newButton.textContent = 'New Button';

// // Use appendChild to add new elements to the DOM
// document.getElementById('servings').appendChild(newButton);

// // HTML templating with cloneNode
// const newInstruction = document.querySelector('#instructions ol li').cloneNode(true);
// document.querySelector('#instructions ol').appendChild(newInstruction);

// // Modify HTML content
// document.getElementById('introduction').textContent = 'This is a delicious recipe that you\'ll love to cook.';

// // Modify style
// header.addEventListener('click', () => {
//     header.style.backgroundColor = '#666';
// });

// // Modify attribute
// const recipeLink = document.createElement('a');
// recipeLink.textContent = 'Link to Recipe';
// recipeLink.href = 'https://themodernnonna.com/easy-homemade-pizza/';
// footer.appendChild(recipeLink);

// // Register event listeners and event handler functions
// newButton.addEventListener('click', () => {
//     alert('Button clicked!');
// });

// recipeLink.addEventListener('mouseenter', () => {
//     console.log('Mouse entered recipe link');
// });

// // Use Browser Object Model (BOM) properties or methods
// console.log('Last modified:', document.lastModified);
// console.log('Location:', window.location);

// // Form validation
// const servingsInput = document.getElementById('servings-input');
// servingsInput.addEventListener('input', () => {
//     if (servingsInput.value < 1) {
//         servingsInput.setCustomValidity('Please enter a valid number of servings.');
//     } else {
//         servingsInput.setCustomValidity('');
//     }
// });