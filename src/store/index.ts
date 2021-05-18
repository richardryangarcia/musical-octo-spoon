import {
    compose,
    createStore,
    applyMiddleware,
    Store,
    Middleware,
} from "redux";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";
import { InitialState, initialState } from './state';
import { epics } from './epics';
import { reducers } from './reducers';
import { AllActions } from './actions';

declare global {
    interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware: EpicMiddleware<AllActions, AllActions, InitialState> = createEpicMiddleware<AllActions, AllActions, InitialState>();

const middlewares: Middleware[] = [epicMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store: Store = createStore(reducers, initialState, enhancer);

// epicMiddleware.run(epics);

export default store;