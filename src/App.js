import QuizList from './components/quiz/QuizList';
import EditQuiz from './components/quiz/EditQuiz';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuizzes } from "./redux/actions/quizActions";
import QuizService from './services/QuizService'
import React, { useEffect } from "react";
import './App.css';



function App() {
  const dispatch = useDispatch();

  const fetchQuizzes = async () => {
    const response = await QuizService.getAllQuizzes();
    dispatch(setQuizzes(response.data));
  }

  useEffect(() => {
    fetchQuizzes();
  }, [])
  
  return (
    <Router>
      <div className='mainApp'>
        <nav>
          <ul>
            <li>
              <Link to="/quizzes">Quizzes</Link>
            </li>
          </ul>
        </nav>

        <Routes >
          <Route exact path="/quizzes" element={<QuizList />} />
          <Route exact path="/quizzes/:quizId/" element={<EditQuiz />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
