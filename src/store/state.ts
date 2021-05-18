import { AuthInitialState, authInitialState } from './auth/reducers';
export type InitialState = {
    auth: AuthInitialState
}

export const initialState: InitialState = {
    auth: authInitialState
}