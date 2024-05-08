const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SongModel = require('./models/Song');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MusicApplication")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post('/register', (req, res) => {
  SongModel.create(req.body)
    .then(song => res.json(song))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Express.js server
app.get('/song/lang', (req, res) => {
  SongModel.find({ language: "English" })
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }));
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
