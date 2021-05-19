import { AllActions, InitialState } from '../index';
import { ActionsObservable, Epic } from "redux-observable";
import { switchMap, catchError, mergeMap, filter } from "rxjs/operators";
import { BookingActionTypes, bookingFailure, bookingSuccess, userBookingSuccess, roomBookingSuccess } from './actions';
import { isOfType } from "typesafe-actions";
import { of, from, merge } from "rxjs";
import { createBooking, deleteBooking, getBookingsByUser, getBookingsByRoom } from '../../services/booking';

export const createBookingEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
  ) =>
    action$.pipe(
      filter(isOfType(BookingActionTypes.CREATE_BOOKING)),
      switchMap((action) => {
        return from(createBooking(action.payload)).pipe(
          mergeMap(() => [
            bookingSuccess(),
          ]),
          catchError((error) =>
            merge(
              of(bookingFailure(error))
            )
          )
        );
      })
    );

export const deleteBookingEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
    ) =>
    action$.pipe(
        filter(isOfType(BookingActionTypes.DELETE_BOOKING)),
        switchMap((action) => {
        return from(deleteBooking(action.payload.bookingId)).pipe(
            mergeMap(() => [
                bookingSuccess(),
            ]),
            catchError((error) =>
            merge(
                of(bookingFailure(error))
            )
            )
        );
        })
    );

export const userBookingEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
    ) =>
    action$.pipe(
        filter(isOfType(BookingActionTypes.USER_BOOKINGS)),
        switchMap((action) => {
        return from(getBookingsByUser()).pipe(
            mergeMap((data) => [
                userBookingSuccess(data),
            ]),
            catchError((error) =>
            merge(
                of(bookingFailure(error))
            )
            )
        );
        })
    );

export const roomBookingEpic: Epic<AllActions, AllActions, InitialState> = (
    action$: ActionsObservable<AllActions>
    ) =>
    action$.pipe(
        filter(isOfType(BookingActionTypes.ROOM_BOOKINGS)),
        switchMap((action) => {
        const { roomId, date } = action.payload;
        return from(getBookingsByRoom(roomId, date)).pipe(
            mergeMap((data) => [
                roomBookingSuccess(data),
            ]),
            catchError((error) =>
            merge(
                of(bookingFailure(error))
            )
            )
        );
        })
    );
    

  export const BookingEpics = [
      createBookingEpic, 
      deleteBookingEpic,
      userBookingEpic,
      roomBookingEpic
    ]