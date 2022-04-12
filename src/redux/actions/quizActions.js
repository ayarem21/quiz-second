import QuizService from '../../services/QuizService'

export const ARCHIVE_QUIZ = "ARCHIVE_QUIZ";
export const SET_QUIZZES = "GET_QUSET_QUIZZESIZZES";

export const setQuizzes = (quizzes) => {
    return {
        type: SET_QUIZZES,
        payload: quizzes,
    };
};


// export function updateQuiz(id) {
//     return {
//         type: ARCHIVE_QUIZ,
//         payload: id,
//     }
// }
