// Function to handle input field click and display error message if empty
function handleInputClick(event) {
  const input = event.target;
  const inputInfo = input.nextElementSibling;
  const errorMessage = document.getElementById('errorMessage');

  if (input.value === '') {
    inputInfo.textContent = `Please enter ${input.placeholder}`;
    inputInfo.style.color = 'red';
  } else {
    inputInfo.textContent = '';
    errorMessage.textContent = '';
  }
}

// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email && password) {
    // Check if user exists or login credentials are correct (using JSON server or any other method)
    const userExists = await checkUserExists(email, password);

    if (userExists) {
      // User exists and login successful
      const userName = extractUserName(email);
      window.location.href = `homepage.html?email=${email}`;
    } else {
      // User does not exist or login credentials are incorrect
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = "It seems you are not an existing user. Please create an account.";
      errorMessage.style.color = 'red';
      errorMessage.style.fontWeight = 'bold';
      errorMessage.style.textAlign = 'center';

      // Clear the form inputs
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    }
  } else {
    // Display error message or highlight empty fields
    const errorMessage = document.getElementById('error');
    errorMessage.style.color = 'red';

    if (!email) {
      errorMessage.textContent = 'Please enter an email';
    } else if (!password) {
      errorMessage.textContent = 'Please enter a password';
    }
  }
}

// Function to check if user exists or login credentials are correct (using JSON server or any other method)
async function checkUserExists(email, password) {
  try {
    // Make a GET request to the JSON server to fetch the user data
    const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
    const data = await response.json();

    // Return true if user exists and login credentials are correct; otherwise, return false
    return data.length > 0;
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false; // Return false in case of any error
  }
}

// Function to extract the username from the email
function extractUserName(email) {
  // Extract the username from the email address
  const atIndex = email.indexOf('@');
  return email.slice(0, atIndex);
}

// Event listener for form submission
const signInButton = document.querySelector('.btn-primary');
signInButton.addEventListener('click', handleFormSubmit);

// Get input fields
const inputFields = document.querySelectorAll('.form-group input');

// Attach click event listener to each input field
inputFields.forEach(input => {
  input.addEventListener('click', handleInputClick);
});

// Event listener for "Create an Account" button
const createAccountButton = document.querySelector('.btn-secondary');
createAccountButton.addEventListener('click', function () {
  window.location.href = 'Create_Account.html';
});

// Event listener for "Forgot your Password?" link
const forgotPasswordLink = document.querySelector('.forgot-password a');
forgotPasswordLink.addEventListener('click', function () {
  window.location.href = 'forgotpassword.html';
});

// Clear error message on input field change
inputFields.forEach(input => {
  input.addEventListener('input', function () {
    const errorMessage = document.getElementById('error');
    errorMessage.textContent = '';
  });
});