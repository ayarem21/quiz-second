import API from '../utils/API';

const getAllQuizzes = () => {
    return API.get('/api/quizzes/');
}

const getQuizById = (id) => {
    return API.get(`/api/quizzes/${id}`);
}

export default {
    getAllQuizzes,
    getQuizById
}