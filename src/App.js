import QuizList from './components/quiz/QuizList';
import EditQuiz from './components/quiz/EditQuiz';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';



function App() {
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
