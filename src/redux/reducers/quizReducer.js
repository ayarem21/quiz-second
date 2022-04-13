import { ARCHIVE_QUIZ, EDIT_QUIZ, SET_QUIZZES } from "../actions/quizActions";

const initialState = {
    quizzes: [],
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZZES:
            return {
                ...state,
                quizzes: action.payload
            };
        case ARCHIVE_QUIZ:
            return {
                ...state,
                quizzes: state.quizzes.map(quiz =>
                    quiz.id === action.payload.quizId 
                    ? {...quiz, isArchived: !quiz.isArchived} 
                    : quiz)
            };
        case EDIT_QUIZ:
            console.log(action)
            return {
                ...state,
                quizzes: state.quizzes.map(quiz =>
                    quiz.id == action.payload.quizId
                    ? {...quiz, title: action.payload.updatedQuiz.title, description: action.payload.updatedQuiz.description, isArchived: action.payload.updatedQuiz.isArchived} 
                    : quiz)
            };
        default:
            return state;
    }
}