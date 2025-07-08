const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.mongodb_url)


.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
