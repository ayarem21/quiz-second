import { useEffect, useState } from 'react';
import QuizList from './components/QuizList';
import './App.css';
import axios from 'axios';

function App() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/quizzes/').then((res) => {
      setQuizzes(res.data)
    });
    // setQuizzes([{"id":1}])
  }, [setQuizzes])
  return (
      <div className="App">
        <QuizList quizzes={quizzes}/>
      </div>
  );
}

export default App;
