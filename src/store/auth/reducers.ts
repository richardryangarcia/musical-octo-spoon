import { Reducer } from "redux";
import { AuthActions, AuthActionTypes } from "./actions";

export interface AuthInitialState {
  authenticated: boolean;
  loading: boolean;
  error?: Error;
}

export const authInitialState: AuthInitialState = {
  authenticated: false,
  loading: true,
  error: undefined,
};

export const authReducer: Reducer<AuthInitialState, AuthActions> = (
  state: AuthInitialState = authInitialState,
  action: AuthActions
) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN:
      console.log('in log in')
      return {
        ...state,
        loading: true,
        authenticated: false,
        error: undefined,
      };
    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        loading: true,
        authenticated: false,
        error: undefined,
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      window.localStorage.setItem(`${process.env.REACT_APP_TOKEN_ID || ''}`, action.payload.jwt)
      return {
        ...state,
        loading: false,
        authenticated: true      
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        authenticated: false,
        error: action.payload.error,
      };
    case AuthActionTypes.DONE_LOADING:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
    case AuthActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case AuthActionTypes.AUTHENTICATE:
      return {
        ...state,
        loading: false,
        error: undefined,
        authenticated: true
      };
    default: {
      return state;
    }
  }
};
