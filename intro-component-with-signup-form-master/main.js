let form = document.querySelector('form');

let firstNameInput = document.getElementById('firstName');
let firstNameErr = document.querySelector(".Err-firstName");
let firstNameIconErr = document.querySelector('.iconErr-firstName');

let lastNameInput = document.getElementById('lastName');
let lastNameErr = document.querySelector(".Err-lastName");
let lastNameIconErr = document.querySelector('.iconErr-lastName');

let emailInput = document.getElementById('email');
let emailErr = document.querySelector(".Err-email");
let emailIconErr = document.querySelector('.iconErr-email');

let passwordInput = document.getElementById('password');
let passwordErr = document.querySelector(".Err-password");
let passwordIconErr = document.querySelector('.iconErr-password');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;

    if(firstNameInput.value.length < 1) {
        setInputInvalid(firstNameInput, firstNameInput.placeholder, firstNameErr, firstNameIconErr);
        isFormValid = false;
    } else {
        setInputvalid(firstNameInput, firstNameErr, firstNameIconErr);
    }

    if(lastNameInput.value.length < 1) {
        setInputInvalid(lastNameInput, lastNameInput.placeholder, lastNameErr, lastNameIconErr);
        isFormValid = false;
    } else {
        setInputvalid(lastNameInput, lastNameErr, lastNameIconErr);
    }

    if(!emailPattern.test(emailInput.value)) {
        setInputInvalid(emailInput, emailInput.placeholder, emailErr, emailIconErr);
        isFormValid = false;
    } else {
        setInputvalid(emailInput, emailErr, emailIconErr);
    }

    if(passwordInput.value.length < 1) {
        setInputInvalid(passwordInput, passwordInput.placeholder, passwordErr, passwordIconErr);
        isFormValid = false;
    } else {
        setInputvalid(passwordInput, passwordErr, passwordIconErr);
    }

    if(isFormValid) {
        alert("Your free trial has started. Enjoy all features for 15 days!");
        form.submit();
    }
})

function setInputInvalid(input, fieldName, error, icon) {
    input.classList.remove('border-dark-blue/30', 'border');
    input.classList.add('border-red', 'border-2');
    if(input.type === "email") {
        error.textContent = 'Looks like this is not an email.'
    } else {
        error.textContent = `${fieldName} cannot be empty.`
    }
    error.classList.remove("hidden");
    icon.classList.remove('hidden');
}

function setInputvalid(input, error, icon) {
    input.classList.remove('border-red', 'border-2');
    input.classList.add('border-dark-blue/30', 'border');
    error.classList.add("hidden");
    icon.classList.add('hidden');
}
