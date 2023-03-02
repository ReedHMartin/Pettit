// Function to handle the submission of the new project form
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get values from form inputs
  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  // If all required fields are present
  if (name && needed_funding && description) {
    // Send a POST request to the API endpoint with form data
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If the request was successful, redirect to the profile page
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      // If the request failed, show an alert with the error message
      alert('Failed to create project');
    }
  }
};

// Function to handle the click of the delete project button
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Send a DELETE request to the API endpoint with the ID of the project to be deleted
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    // If the request was successful, redirect to the profile page
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      // If the request failed, show an alert with the error message
      alert('Failed to delete project');
    }
  }
};

// Add event listeners to the new project form and the project list to handle form submission and delete button clicks
document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);
document.querySelector('.project-list').addEventListener('click', delButtonHandler);
