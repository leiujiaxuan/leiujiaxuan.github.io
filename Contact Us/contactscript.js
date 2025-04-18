// Get references to the form fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
var existingData;

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
    const newdata = {
        name: name,
        email: email,
        feedback: feedback
    };

    // append new jsonData to existing json file in JSONBin
    const apiKey = '$2a$10$zadHyt2fNyCJgiATwc7qqOv63doxV4zByMnA7mBb004ym8SecjmmO'; // Replace with your API key
    
    fetch(`https://api.jsonbin.io/v3/b/680076f38a456b79668b15cb`, {
        method: 'GET',
        headers: {
            'X-Master-Key': apiKey, // API key for authentication
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Append new data to the existing data
        existingData = data.record; // Current data in the bin
        existingData.push(newdata); // Add new data to the array
        // update the bin with the new data
        return fetch(`https://api.jsonbin.io/v3/b/680076f38a456b79668b15cb`, {
            method: 'PUT',
            headers: {
                'X-Master-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(existingData) // Send updated JSON
        });
    })
    .then(() => {
        // Show the data sent to the JSONBin
        console.log("Data sented to JSONBin: " + JSON.stringify(newdata));

        // clear local storage
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('feedback');

        // Clear form fields after submission
        nameInput.value = '';
        emailInput.value = '';
        feedbackInput.value = '';
        alert('Your feedback is submitted');

    })    
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    
});
