import { combineReducers } from "redux";
import { authReducer } from './auth/reducers';
import { userReducer } from './user/reducer';

export const reducers = combineReducers({
    auth: authReducer,
    user: userReducer
});