import React from "react";
import Quiz from "./Quiz";


function QuizList ({ quizzes }) {
  return (
    <ul className="quiz-list">
        {quizzes.map((quiz) => {
            return <Quiz key={quiz.id} quiz={quiz} />;
          })
        }
    </ul>
  );
};

export default QuizList;