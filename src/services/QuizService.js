import API from '../utils/API';

const getAllQuizzes = () => {
    return API.get('/api/quizzes/');
}

const getQuizById = (id) => {
    return API.get(`/api/quizzes/${id}`);
}

const EditQuiz = (id, quiz) => {
    return API.put(`/api/quizzes/${id}`, quiz);
}

const changeArchiveProperty = (id) => {
    return API.patch(`/api/quizzes/${id}/archive`);
}

export default {
    getAllQuizzes,
    getQuizById,
    EditQuiz,
    changeArchiveProperty
}