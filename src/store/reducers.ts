import { combineReducers } from "redux";
import { authReducer } from './auth/reducers';
import { userReducer } from './user/reducers';
import { buildingReducer } from './building/reducers';

export const reducers = combineReducers({
    auth: authReducer,
    building: buildingReducer,
    user: userReducer
});