import { GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from "../actionTypes";
import questions from '../dummyData/index';

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const getQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: GET_QUESTIONS_REQUEST});
        const questionsData = await shuffle(questions);
        const answersData = await questions.map(question => shuffle(question.answerOptions));
        
        dispatch({ type: GET_QUESTIONS_SUCCESS, payload: {questionsData, answersData}});
        
    } catch (error) {
        dispatch({ type: GET_QUESTIONS_FAILURE, payload: error.message});
    }
}
