import { combineReducers } from "redux";
import { authReducer } from './auth/reducers';
import { userReducer } from './user/reducers';
import { buildingReducer } from './building/reducers';
import { bookingReducer } from './booking/reducers';


export const reducers = combineReducers({
    auth: authReducer,
    booking: bookingReducer,
    building: buildingReducer,
    user: userReducer
});