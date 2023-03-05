// Define a function to log out the user
const logout = async () => {
  // Send a POST request to the API endpoint to log out the user
  console.log("DOC",document.location);
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // If successful, redirect the browser to the homepage
  if (response.ok) {
//    location.href="/";
   document.location.replace('/');
  } else {
    // If not successful, display an error message
    alert(response.statusText);
  }
};

// Add an event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
