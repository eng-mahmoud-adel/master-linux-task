import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actionTypes";

export const signIn = (userInfo) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST});
    
        if(userInfo) localStorage.setItem('user', JSON.stringify(userInfo));
        dispatch({ type: LOGIN_SUCCESS, payload: userInfo});
        
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message});
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT});
}