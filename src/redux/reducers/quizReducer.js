import { ARCHIVE_QUIZ, SET_QUIZZES } from "../actions/quizActions";

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
            // console.log(state)
            //  state.quizzes.map(quiz =>
            //     quiz.id === action.payload.quizId 
            //     ? {...quiz, isArchived: !quiz.isArchived} 
            //     : quiz
            //     );
            //     console.log(state.quizzes);
            return {
                ...state,
                quizzes: state.quizzes.map(quiz =>
                    quiz.id === action.payload.quizId 
                    ? {...quiz, isArchived: !quiz.isArchived} 
                    : quiz)
            };
        default:
            return state;
    }
}