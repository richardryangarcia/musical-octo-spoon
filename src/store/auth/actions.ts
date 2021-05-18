import { Action } from "redux";
import { AuthenticateDto } from '../../services/auth';

export enum AuthActionTypes {
    SIGN_UP = '@@auth/SIGN_UP',
    SIGN_UP_SUCCESS = '@@auth/SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = '@@auth/SIGN_UP_FAILURE',
    SIGN_IN = '@@auth/SIGN_IN',
    SIGN_IN_SUCCESS = '@@auth/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE = '@@auth/SIGN_IN_FAILURE',
}

export interface SignUp extends Action {
    type: AuthActionTypes.SIGN_UP,
    payload: AuthenticateDto
}

export const signUp = (authenticateDto: AuthenticateDto): SignUp => {
    return {
        type: AuthActionTypes.SIGN_UP,
        payload: authenticateDto
    }
}

interface SignUpSuccess extends Action {
    type: AuthActionTypes.SIGN_UP_SUCCESS
}

export const signUpSuccess = (): SignUpSuccess => {
    return {
        type: AuthActionTypes.SIGN_UP_SUCCESS
    }
}

interface SignUpFailure extends Action {
    type: AuthActionTypes.SIGN_UP_FAILURE,
    payload: {
        error: Error
    }
}

export const signUpFailure = (error: Error): SignUpFailure => {
    return {
        type: AuthActionTypes.SIGN_UP_FAILURE,
        payload: { error }
    }
} 

interface SignIn extends Action {
    type: AuthActionTypes.SIGN_IN,
    payload: AuthenticateDto
}

export const signIn = (authenticateDto: AuthenticateDto): SignIn => {
    return {
        type: AuthActionTypes.SIGN_IN,
        payload: authenticateDto
    }
}

interface SignInSuccess extends Action {
    type: AuthActionTypes.SIGN_IN_SUCCESS
}

export const signInSuccess = (): SignInSuccess => {
    return {
        type: AuthActionTypes.SIGN_IN_SUCCESS
    }
}

interface SignInFailure extends Action {
    type: AuthActionTypes.SIGN_IN_FAILURE,
    payload: {
        error: Error
    }
}

export const signInFailure = (error: Error): SignInFailure => {
    return {
        type: AuthActionTypes.SIGN_IN_FAILURE,
        payload: { error }
    }
} 


export type AuthActions = 
    | SignUp 
    | SignUpSuccess
    | SignUpFailure
    | SignIn
    | SignInSuccess
    | SignInFailure