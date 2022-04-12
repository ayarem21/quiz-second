import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
     allQuizzes: quizReducer,
});

export default reducers;