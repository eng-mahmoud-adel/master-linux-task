import { SHOW_RESULT } from "../actionTypes";

export const getResult = (result) => async (dispatch) => {
    dispatch({ type: SHOW_RESULT, payload: result});    
}
