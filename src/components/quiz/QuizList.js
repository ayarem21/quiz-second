import React, { useEffect } from "react";
import Quiz from "./Quiz";
import './QuizList.css'
import { useSelector } from "react-redux";



function QuizList () {
  const quizzes = useSelector((state) => state.allQuizzes.quizzes);

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