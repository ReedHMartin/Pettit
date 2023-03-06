// Event listener for the login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if email and password fields are not empty
  if (email && password) {
    // Send a POST request to the API endpoint with the login data
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response is OK (status code 200-299)
    if (response.ok) {
      // If successful, redirect the browser to the user's profile page
      document.location.replace('/');
    } else {
      // If the response status is not OK, show an error message
      alert(response.statusText);
    }
  }
};

// Event listener for the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check if all fields are not empty
  if (name && email && password) {
    // Send a POST request to the API endpoint with the signup data
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response is OK (status code 200-299)
    if (response.ok) {
      // If successful, redirect the browser to the user's profile page
      //      document.location.replace('/profile');
      document.locaiton.replace("/");
    } else {
      // If the response status is not OK, show an error message
      alert(response.statusText);
    }
  }
};

// Add event listeners to the login and signup forms
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
