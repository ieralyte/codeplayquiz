// src/components/QuizForm.js
import React, { useState } from 'react';
import axios from 'axios';

const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuiz = { question, option1, option2, option3, option4, correctAnswer };

    try {
      const response = await axios.post('http://localhost:5001/addQuiz', newQuiz);
      alert(response.data);
    } catch (error) {
      alert('Failed to add quiz');
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label>Option 1:</label>
        <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} />
      </div>
      <div>
        <label>Option 2:</label>
        <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} />
      </div>
      <div>
        <label>Option 3:</label>
        <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)} />
      </div>
      <div>
        <label>Option 4:</label>
        <input type="text" value={option4} onChange={(e) => setOption4(e.target.value)} />
      </div>
      <div>
        <label>Correct Answer:</label>
        <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
      </div>
      <button type="submit">Add Quiz</button>
    </form>
  );
};

export default QuizForm;
