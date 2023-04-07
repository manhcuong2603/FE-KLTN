// Get the input fields and error message elements
const nameInput = document.querySelector('.input:nth-of-type(1)');
const emailInput = document.querySelector('.input-email');
const addressInput = document.querySelector('.input:nth-of-type(3)');
const phoneInput = document.querySelector('.input:nth-of-type(4)');
const passwordInput = document.querySelector('.input-password');
const nameError = document.querySelector('.error-messageNM');
const emailError = document.querySelector('.error-messageEM');
const addressError = document.querySelector('.error-messageAD');
const phoneError = document.querySelector('.error-messagePN');
const passwordError = document.querySelector('.error-messagePW');

// Add event listeners to the input fields
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
addressInput.addEventListener('blur', validateAddress);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

function validateName() {
    const name = nameInput.value.trim();
    if (!name) {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
}

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

function validateAddress() {
    const address = addressInput.value.trim();
    if (!address) {
        addressError.textContent = 'Address is required';
    } else {
        addressError.textContent = '';
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    if (!phone) {
        phoneError.textContent = 'Phone number is required';
    } else if (!isValidPhone(phone)) {
        phoneError.textContent = 'Please enter a valid phone number';
    } else {
        phoneError.textContent = '';
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

function isValidPhone(phone) {
    // A simple phone number validation regex
    const regex = /^\d{10}$/;
    return regex.test(phone);
}
