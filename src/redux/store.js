import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { questionsReducer } from "./reducers/questions.reducer";
import { resultReducer } from "./reducers/result.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    questions: questionsReducer,
    result: resultReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
