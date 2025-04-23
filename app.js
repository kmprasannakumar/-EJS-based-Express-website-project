// app.js
const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to serve static files like CSS, JS, images
app.use(express.static('public'));

// Route for the homepage (index)
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Route for the About page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Route for the Contact page
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
