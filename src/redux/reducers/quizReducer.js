import { ARCHIVE_QUIZ, SET_QUIZZES } from "../actions/quizActions";

const initialState = {
    quizzes: [],
};

export const quizReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_QUIZZES:
            console.log('payload', action.payload)
            return {
                ...state,
                quizzes: action.payload
            };
        default:
            return state;
        // case ARCHIVE_QUIZ:
        //     let newQuizzes = [...state];
        //     let needForUpdate = newQuizzes.find(q => q.id === action.payload.quizId)
        //     needForUpdate.isArchived = !needForUpdate.isArchived;
        //     return newQuizzes;
    }
}