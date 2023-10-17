const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001; // Choose a port for your API

app.use(cors());
app.use(express.json()); // Parse JSON requests


// Serve images statically (adjust the path accordingly)
app.use('/images', express.static('components/images'));

// Define your API endpoint to serve data
app.get('/api/data', (req, res) => {
    // Import your data.js file
const { data } = require('./data/data'); // Adjust the path as needed

  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});