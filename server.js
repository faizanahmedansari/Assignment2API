const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database
mongoose.connect('mongodb://localhost:27017/MovieDB', { useNewUrlParser: true })
  .then(() => console.log('Connected to database...'))
  .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const MovieControl = require('./controllers/MovieControl');

// Routes
app.post('/api/movie/create', MovieControl.create);
app.post('/api/movie/update', MovieControl.update);
app.get('/api/movie/retrieve', MovieControl.retrieve);
app.delete('/api/movie/delete', MovieControl.delete);

// Start Server
app.listen(8000, () => console.log('Server has started on port 8000...'));