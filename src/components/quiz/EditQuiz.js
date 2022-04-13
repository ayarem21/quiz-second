import { Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuizService from '../../services/QuizService'
import { editQuiz } from "../../redux/actions/quizActions";

function EditQuiz () {
    const { quizId } = useParams();
    const quiz = useSelector((state) => state.allQuizzes.quizzes.find(q => q.id == quizId));
    const dispatch = useDispatch();

    return(
        <div className="container">
            <Formik
                enableReinitialize={ true }
                initialValues = { quiz }
                onSubmit={(updatedQuiz) => {
                        QuizService.EditQuiz(quiz.id, updatedQuiz)
                        dispatch(editQuiz({
                            quizId, updatedQuiz
                        }));
                   }
                }
            >
                <Form>
                    <Field id="title" name="title"/>
                    <Field id="description" name="description"/>
                    <label>Archived:</label>
                    <Field type="checkbox" id="isArchived" name="isArchived"/>
                    <button type="submit">Edit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EditQuiz;