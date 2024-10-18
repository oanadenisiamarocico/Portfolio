document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        displayMessage('All fields are required!', 'red');
        return;
    }

    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address!', 'red');
        return;
    }

    displayMessage('Thank you for contacting us, ' + name + '!', 'green');

    document.getElementById('contactForm').reset();
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to display feedback messages
function displayMessage(message, color) {
    const messageDiv = document.getElementById('form-message');
    messageDiv.innerText = message;
    messageDiv.style.color = color;
}