import React from "react";
import Quiz from "./Quiz";
import { useEffect, useState } from 'react';
import QuizService from '../../services/QuizService'
import './QuizList.css'


function QuizList () {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    QuizService.getAllQuizzes().then((res) => {
      setQuizzes(res.data)
    });
  }, [setQuizzes])
  return (
    <div className="quizList">
        {quizzes.map((quiz) => {
            return <Quiz key={quiz.id} quiz={quiz} />;
          })
        }
    </div>
  );
};

export default QuizList;