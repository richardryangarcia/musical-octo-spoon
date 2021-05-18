import { AuthInitialState, authInitialState } from './auth/reducers';
import { BuildingInitialState, buildingInitialState } from './building/reducers';
import { UserInitialState, userInitialState } from './user/reducers';
import { BookingInitialState, bookingInitialState } from './booking/reducers';


export type InitialState = {
    auth: AuthInitialState,
    booking: BookingInitialState,
    building: BuildingInitialState,
    user: UserInitialState
}

export const initialState: InitialState = {
    auth: authInitialState,
    booking: bookingInitialState,
    building: buildingInitialState,
    user: userInitialState
}