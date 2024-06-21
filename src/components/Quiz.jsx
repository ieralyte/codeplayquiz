import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container">
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h2>{quiz.question}</h2>
          <ul>
            {['option1', 'option2', 'option3', 'option4'].map((opt, i) => (
              <li 
                key={i} 
                className={
                  submitted
                    ? quiz.correctAnswer === quiz[opt]
                      ? 'correct'
                      : selectedAnswers[index] === quiz[opt]
                      ? 'wrong'
                      : ''
                    : ''
                }
                onClick={() => handleOptionSelect(index, quiz[opt])}
              >
                {quiz[opt]}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {submitted && (
        <div className="index">
          {quizzes.map((quiz, index) => (
            <div key={index}>
              <p>Question {index + 1}: {selectedAnswers[index] === quiz.correctAnswer ? 'Correct' : 'Wrong'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
