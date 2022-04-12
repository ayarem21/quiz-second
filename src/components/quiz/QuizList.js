import React, { useEffect } from "react";
import Quiz from "./Quiz";
import './QuizList.css'
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "../../redux/actions/quizActions";
import QuizService from '../../services/QuizService'


function QuizList () {
  const quizzes = useSelector((state) => state.allQuizzes.quizzes);
  const dispatch = useDispatch();

  const fetchQuizzes = async () => {
    const response = await QuizService.getAllQuizzes();
    dispatch(setQuizzes(response.data));
  }

  useEffect(() => {
    fetchQuizzes();
  }, [])


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