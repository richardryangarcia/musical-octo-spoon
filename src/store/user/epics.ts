import { AllActions } from '../actions';
import { InitialState } from '../state';
import { ActionsObservable, Epic } from "redux-observable";
import { switchMap, catchError, mergeMap, filter } from "rxjs/operators";
import { UserActionTypes, userDetailsSuccess, userDetailsFailure } from './actions';
import { isOfType } from "typesafe-actions";
import { of, from, merge } from "rxjs";
import { getUserDetails } from '../../services/user';

export const userDetailsEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
  ) =>
    action$.pipe(
      filter(isOfType(UserActionTypes.USER_DETAILS)),
      switchMap((action) => {
        return from(getUserDetails()).pipe(
          mergeMap((data) => [
            userDetailsSuccess(data),
          ]),
          catchError((error) =>
            merge(
              of(userDetailsFailure(error))
            )
          )
        );
      })
    );

  export const UserEpics = [userDetailsEpic]