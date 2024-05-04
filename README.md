Cache at least one element using selectElementById.(const header = document.getElementById('page-header');)
Cache at least one element using querySelector or querySelectorAll:(const ingredientsList = document.querySelector('#ingredients ul');)
Use the parent-child-sibling relationship to navigate between elements at least once:(const ingredientItems = ingredientsList.querySelectorAll('li');)
Iterate over a collection of elements to accomplish some task:(ingredientItems.forEach((item) => {
    // Add event listeners
    item.addEventListener('click', () => {
        console.log('Ingredient clicked');
    });
});)
Create at least one element using createElement:(const newButton = document.createElement('button');)
Use appendChild and/or prepend to add new elements to the DOM:(document.getElementById('servings').appendChild(newButton);)
Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content:(const newInstruction = document.querySelector('#instructions ol li').cloneNode(true);)
Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent:(document.getElementById('introduction').textContent = 'This is a delicious recipe that you\'ll love to cook.';)
Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties:(header.addEventListener('click', () => {
    header.style.backgroundColor = '#666';
});)
Modify at least one attribute of an element in response to user interaction:(recipeLink.href = 'https://themodernnonna.com/easy-homemade-pizza/';)
Register at least two different event listeners and create the associated event handler functions:(newButton.addEventListener('click', () => {
    alert('Button clicked!');
});

recipeLink.addEventListener('mouseenter', () => {
    console.log('Mouse entered recipe link');
});)
Use at least two Browser Object Model (BOM) properties or methods:(console.log('Last modified:', document.lastModified);
console.log('Location:', window.location);)
Include at least one form and/or input with HTML attribute validation:(<input type="email" id="email" name="email" required>)
Include at least one form and/or input with DOM event-based validation:(const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    if (!emailInput.validity.valid) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});)
Ensure that the program runs without errors:
