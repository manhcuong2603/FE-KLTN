// Get the input fields and error message elements
const emailInput = document.querySelector('.input-email');
const passwordInput = document.querySelector('.input-password');
const emailError = document.querySelectorAll('.error-message')[0];
const passwordError = document.querySelectorAll('.error-message')[1];

// Add event listeners to the input fields
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

function validateEmail() {
    const email = emailInput.value.trim();
    if (!email) {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (!password) {
        passwordError.textContent = 'Password is required';
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
    } else {
        passwordError.textContent = '';
    }
}

function isValidEmail(email) {
    // A simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
