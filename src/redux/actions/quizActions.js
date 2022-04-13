export const ARCHIVE_QUIZ = "ARCHIVE_QUIZ";
export const SET_QUIZZES = "GET_QUSET_QUIZZESIZZES";
export const EDIT_QUIZ = "EDIT_QUIZ"; //TODO move to file with constants

export const setQuizzes = (quizzes) => {
    return {
        type: SET_QUIZZES,
        payload: quizzes,
    }
}

export const updateQuiz = (id) => {
    return {
        type: ARCHIVE_QUIZ,
        payload: id,
    }
}

export const editQuiz = (quizInfo) => {
    return {
        type: EDIT_QUIZ,
        payload: quizInfo
    }
}