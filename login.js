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
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if both fields are filled
    if (email && password) {
      // Check if user exists or login credentials are correct (using JSON server or any other method)
      const userExists = checkUserExists(email, password);
  
      if (userExists) {
        // User exists and login successful
        const userName = extractUserName(email);
        window.location.href = `home.html?user=${userName}`;
      } else {
        // User does not exist or login credentials are incorrect
        const errorMessage = document.getElementById('error');
        errorMessage.textContent = "It seems you are not an existing user. Please create an account.";
        errorMessage.style.color = 'red';
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
  function checkUserExists(email, password) {
    // Make a GET request to the JSON server or use your own method to check user existence and credentials
    // Return true if user exists and login credentials are correct; otherwise, return false
    return true;
  }
  
  // Function to extract the username from the email
  function extractUserName(email) {
    // Extract the username from the email address
    const atIndex = email.indexOf('@');
    return email.slice(0, atIndex);
  }
  
  // Event listener for form submission
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleFormSubmit);
  
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