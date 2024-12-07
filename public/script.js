document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the default way
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Send login request to the server
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Login successful') {
        // Redirect to grades page and pass the grade
        window.location.href = `grades.html?username=${username}&grade=${data.grade}`;
      } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('error-message').innerText = 'Error occurred. Please try again.';
    });
  });
  