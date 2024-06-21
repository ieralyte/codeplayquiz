const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data.js');
let quizzes = require(dataPath);

// Endpoint to add a new quiz
app.post('/addQuiz', (req, res) => {
  const newQuiz = req.body;
  console.log('Received new quiz:', newQuiz);

  quizzes.push(newQuiz);

  const updatedData = `module.exports = ${JSON.stringify(quizzes, null, 2)};`;

  fs.writeFile(dataPath, updatedData, (err) => {
    if (err) {
      console.error('Error writing to data file:', err);
      return res.status(500).send('Unable to write to data file');
    }
    console.log('Quiz added successfully');
    res.status(200).send('Quiz added successfully');
  });
});

// Endpoint to fetch all quizzes
app.get('/quizzes', (req, res) => {
  res.json(quizzes);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
