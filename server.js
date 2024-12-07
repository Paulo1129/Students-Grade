const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files like HTML, CSS, JS
app.use(bodyParser.json());

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const data = JSON.parse(fs.readFileSync('grades.json'));

  if (data[username] && data[username].password === password) {
    res.status(200).send({
      message: 'Login successful',
      grade: data[username].grade
    });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
