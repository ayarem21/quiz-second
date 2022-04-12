import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import './Quiz.css';
import QuizService from '../../services/QuizService'
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { updateQuiz } from "../../redux/actions/quizActions";


function Quiz({ quiz }) {
  let dispatch = useDispatch();
  const quizId = quiz.id;
  return (
    <div className="container">
      <h3>{quiz.title}</h3>
      <a>{quiz.description}</a>
      <Link to={`/quizzes/${quiz.id}`}>Edit</Link>
      <Formik
        enableReinitialize={ true }
        initialValues = {{ isArchived: quiz.isArchived }}
        onSubmit={() => {
                QuizService.changeArchiveProperty(quiz.id);
                dispatch(updateQuiz({
                  quizId
                }));
          }
        }
      >
        <Form>
            <button type="submit">{ quiz.isArchived ? "Unarchive" :"Archive"  }</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Quiz;