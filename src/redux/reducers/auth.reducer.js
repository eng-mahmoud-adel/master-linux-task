import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actionTypes";

const initialState = {
    isLoading: false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

export const authReducer = (prevstate = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...prevstate,
                isLoading: true,
            }

        case LOGIN_SUCCESS:
            return {
                ...prevstate,
                isLoading: false,
                user: payload
            }

        case LOGIN_FAILURE:
            return {
                ...prevstate,
                isLoading: false,
                error: payload
            }

        case LOGOUT:
            return {
                ...prevstate,
                user: null
            }
    
        default:
            return prevstate;
    }

}