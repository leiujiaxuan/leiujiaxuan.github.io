// Get references to the form fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');

// Save input values to localStorage on every keystroke
nameInput.addEventListener('input', () => {
    localStorage.setItem('name', nameInput.value);
});

emailInput.addEventListener('input', () => {
    localStorage.setItem('email', emailInput.value);
});

feedbackInput.addEventListener('input', () => {
    localStorage.setItem('feedback', feedbackInput.value);
});

// Load saved values from localStorage when the page loads
window.addEventListener('load', () => {
    // show saved values in localstorage, if nothing found then show blank
    nameInput.value = localStorage.getItem('name') || '';
    emailInput.value = localStorage.getItem('email') || '';
    feedbackInput.value = localStorage.getItem('feedback') || '';
});

// Submit event to collect data and clear localStorage
let form = document.getElementById("feedbackform");
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect all data from localStorage
    const name = localStorage.getItem('name') || '';
    const email = localStorage.getItem('email') || '';
    const feedback = localStorage.getItem('feedback') || '';

    // Create the data object for JSON
    const data = {
        namSe: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        feedback: localStorage.getItem('feedback')
    };

    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(data, null, 2); // 'null' for replacer, '2' for pretty formatting (indentation)
    const blob = new Blob([jsonData], { type: 'application/json' }); // Create a file-like Blo


    // Clear localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('feedback');

    // Clear form fields after submission
    nameInput.value = '';
    emailInput.value = '';
    feedbackInput.value = '';

    alert('Your feedback is submitted');
});
