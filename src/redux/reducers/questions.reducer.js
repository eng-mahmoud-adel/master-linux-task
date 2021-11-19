import { GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from "../actionTypes";

const initialState = {
    isLoading: false,
    questions: [],
    answers: []
}

export const questionsReducer = (prevstate = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case GET_QUESTIONS_REQUEST:
            return {
                ...prevstate,
                isLoading: true,
            }

        case GET_QUESTIONS_SUCCESS:
            return {
                ...prevstate,
                isLoading: false,
                questions: payload.questionsData,
                answers: payload.answersData
            }

        case GET_QUESTIONS_FAILURE:
            return {
                ...prevstate,
                isLoading: false,
                error: payload
            }
    
        default:
            return prevstate;
    }

}