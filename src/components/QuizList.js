import React from 'react';

const QuizList = ({ quizzes }) => {
  return (
    <div>
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.question}</h3>
          <ul>
            <li>{quiz.option1}</li>
            <li>{quiz.option2}</li>
            <li>{quiz.option3}</li>
            <li>{quiz.option4}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizList;

