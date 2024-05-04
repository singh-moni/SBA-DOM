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

// // HTML templating with cloneNode
// const newInstruction = document.querySelector('#ingredients ul li').cloneNode(true);
// document.querySelector('#instructions ol').appendChild(newInstruction);

// Select the 4th ingredient
const fourthIngredient = ingredientsList.querySelectorAll('li')[3];

// Clone the 4th ingredient
const clonedIngredient = fourthIngredient.cloneNode(true);

// Append the cloned ingredient to the instructions list
document.querySelector('#instructions ol').appendChild(clonedIngredient);

 // Modify HTML content
 document.getElementById('introduction').textContent = 'This is a delicious recipe that you\'ll love to cook.';

 // Modify style
 header.addEventListener('click', () => {
    header.style.backgroundColor = '#666';
});

// Modify attribute
const recipeLink = document.createElement('a');
recipeLink.textContent = 'Link to Recipe';
recipeLink.href = 'https://themodernnonna.com/easy-homemade-pizza/';
footer.appendChild(recipeLink);

 // Register event listeners and event handler functions
 newButton.addEventListener('click', () => {
    alert('Button clicked!');
});

recipeLink.addEventListener('mouseenter', () => {
    console.log('Mouse entered recipe link');
});
// Use Browser Object Model (BOM) properties or methods
console.log('Last modified:', document.lastModified);
console.log('Location:', window.location);

// Form validation
const form = document.getElementById('newsletter-form');
const firstNameInput = document.getElementById('first-name');
const emailInput = document.getElementById('email');
const consentCheckbox = document.getElementById('consent');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
// Checks if the email is valid
if (!emailInput.validity.valid) {
    alert('Please enter a valid email address.');
    return;
}

// Check if the consent checkbox is checked
if (!consentCheckbox.checked) {
    alert('Please consent to receiving emails and personalized ads.');
    return;
}

// Form is valid, submit it
alert('Form submitted successfully!');
// You can submit the form here using AJAX or any other method
});































