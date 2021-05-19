import {
    compose,
    createStore,
    applyMiddleware,
    Store,
    combineReducers,
  } from "redux";
  import { createEpicMiddleware, combineEpics } from "redux-observable-es6-compat";
  
  import { AuthEpics } from './auth/epics';
  import { BookingEpics } from './booking/epics';
  import { BuildingEpics } from './building/epics';
  import { UserEpics } from './user/epics';

  import { AuthActions } from './auth/actions';
  import { BookingActions } from './booking/actions';
  import { BuildingActions } from './building/actions';
  import { UserActions } from './user/actions';

  import { AuthInitialState, authInitialState, authReducer } from './auth/reducers';
  import { BookingInitialState, bookingInitialState, bookingReducer } from './booking/reducers';
  import { BuildingInitialState, buildingInitialState, buildingReducer } from './building/reducers';
  import { UserInitialState, userInitialState, userReducer } from './user/reducers';

  export type AllActions = 
    | AuthActions
    | BookingActions
    | BuildingActions
    | UserActions

  export type InitialState = {
    auth: AuthInitialState,
    booking: BookingInitialState,
    building: BuildingInitialState,
    user: UserInitialState
}

const initialState: InitialState = {
    auth: authInitialState,
    booking: bookingInitialState,
    building: buildingInitialState,
    user: userInitialState
}
  
export const reducers = combineReducers({
    user: userReducer,
    auth: authReducer,
    booking: bookingReducer,
    building: buildingReducer,
  });
  
  const epics = combineEpics(
    ...AuthEpics,
    ...BookingEpics,
    ...BuildingEpics,
    ...UserEpics,
  )
  
  ///// setup store //////
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
  }
  const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
  const epicMiddleware = createEpicMiddleware<
    AllActions,
    AllActions,
    InitialState
  >();
  
  const middlewares = [epicMiddleware];
  
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  
  const store: Store = createStore(reducers, initialState, enhancer);
  
  epicMiddleware.run(epics);
  
  export default store;