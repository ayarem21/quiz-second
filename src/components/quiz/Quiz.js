import React from "react";
import { Link } from "react-router-dom";
import './Quiz.css';


function Quiz({ quiz }) {
  return (
    <div className="container">
      <h3>{quiz.title}</h3>
      <a>{quiz.description}</a>
      <Link to={`/quizzes/${quiz.id}`}>Edit</Link>
    </div>
  );
};

export default Quiz;