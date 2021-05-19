import { ActionsObservable, Epic } from "redux-observable";
import { of, from, merge } from "rxjs";
import { switchMap, catchError, mergeMap, filter } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { AllActions, InitialState } from '../index';
import { UserActionTypes, userDetailsSuccess, userDetailsFailure } from './actions';
import { getUserDetails } from '../../services/user';
import { signInFailure, signInSuccess } from '../auth/actions';

export const userDetailsEpic: Epic = (
    action$
  ) =>
    action$.pipe(
      filter(isOfType(UserActionTypes.USER_DETAILS)),
      switchMap((action) => {
        return from(getUserDetails()).pipe(
          mergeMap((data) => [
            userDetailsSuccess(data),
            signInSuccess()
          ]),
          catchError((error) =>
            merge(
              of(userDetailsFailure(error)),
              of(signInFailure(error))
            )
          )
        );
      })
    );

export const UserEpics = [userDetailsEpic]