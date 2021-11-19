import { SHOW_RESULT } from "../actionTypes";

const initialState = {
    result: 0
}

export const resultReducer = (prevstate = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case SHOW_RESULT:
            return {
                ...prevstate,
                result: payload,
            }
    
        default:
            return prevstate;
    }

}