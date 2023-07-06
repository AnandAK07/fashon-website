// Function to handle input field click and display error message if empty
function handleInputClick(event) {
  const input = event.target;
  const errorMessage = input.nextElementSibling;

  if (input.value === '') {
    errorMessage.textContent = `Please enter a ${input.placeholder}`;
    errorMessage.style.color = 'red';
  } else {
    errorMessage.textContent = '';
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if all fields are filled
  if (firstName && lastName && email && password) {
    // Perform additional checks if needed

    // Create account
    createAccount(firstName, lastName, email, password);
  } else {
    // Display error message or highlight empty fields
    const errorMessage = document.getElementById('error');
    errorMessage.style.color = 'red';

    if (!firstName) {
      errorMessage.textContent = 'Please enter a first name';
    } else if (!lastName) {
      errorMessage.textContent = 'Please enter a last name';
    } else if (!email) {
      errorMessage.textContent = 'Please enter an email';
    } else if (!password) {
      errorMessage.textContent = 'Please enter a password';
    }
  }
}

// Function to create an account using JSON server
function createAccount(firstName, lastName, email, password) {
  const userData = { firstName, lastName, email, password };

  // Make a POST request to the JSON server
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      if (data.id) {
        // Account created successfully
        window.location.href = 'accountcreated.html';
      } else {
        // Display error message
        const errorMessage = document.getElementById('error');
        errorMessage.textContent = 'Error creating an account. Please try again.';
        errorMessage.style.color = 'red';
      }
    })
    .catch(error => {
      // Display error message
      const errorMessage = document.getElementById('error');
      errorMessage.textContent = 'Error creating an account. Please try again.';
      errorMessage.style.color = 'red';
    });
}

// Event listener for form submission
const createAccountForm = document.getElementById('createAccountForm');
createAccountForm.addEventListener('submit', handleFormSubmit);

// Get input fields
const inputFields = document.querySelectorAll('.form-group input');

// Attach click event listener to each input field
inputFields.forEach(input => {
  input.addEventListener('click', handleInputClick);
});

// Event listener for "Sign in to Glossier.com" button
const signInButton = document.querySelector('.btn.btn-secondary');
signInButton.addEventListener('click', function () {
window.location.href = 'login.html';
});