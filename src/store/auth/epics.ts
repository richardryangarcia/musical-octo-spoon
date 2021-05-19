import { AllActions, InitialState } from '../index';
import { ActionsObservable, Epic } from "redux-observable";
import { switchMap, catchError, mergeMap, filter } from "rxjs/operators";
import { AuthActionTypes, doneLoading, signInSuccess, signUpFailure, signInFailure } from './actions';
import { isOfType } from "typesafe-actions";
import { of, from, merge } from "rxjs";
import { signUp, signIn } from '../../services/auth';
import { userDetails } from '../user/actions';

export const signUpEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
  ) =>
    action$.pipe(
      filter(isOfType(AuthActionTypes.SIGN_UP)),
      switchMap((action) => {
        return from(signUp(action.payload)).pipe(
          mergeMap(() => [
            doneLoading(),
          ]),
          catchError((error) =>
            merge(
              of(signUpFailure(error))
            )
          )
        );
      })
    );

export const signInEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
    ) =>
    action$.pipe(
        filter(isOfType(AuthActionTypes.SIGN_IN)),
        switchMap((action) => {
        return from(signIn(action.payload)).pipe(
            mergeMap((data) => [
                signInSuccess(data),
                userDetails()
            ]),
            catchError((error) =>
            merge(
                of(signInFailure(error))
            )
            )
        );
    })
    );

  export const AuthEpics = [signInEpic, signUpEpic]