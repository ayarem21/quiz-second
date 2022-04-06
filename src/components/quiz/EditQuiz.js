import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import QuizService from '../../services/QuizService'

function EditQuiz () {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({});
    useEffect(() => {
         QuizService.getQuizById(quizId).then(async (res) => {
                await setQuiz(res.data);
            });
    }, [setQuiz])
    return(
        <div className="container">
            <Formik
                enableReinitialize={ true }
                initialValues = { quiz }
            >
                <Form>
                    <Field id="title" name="title"/>
                    <Field id="description" name="description"/>
                    <Field id="isArchived" name="isArchived"/>
                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EditQuiz;