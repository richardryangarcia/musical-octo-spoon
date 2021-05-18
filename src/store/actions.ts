import { AuthActions} from './auth/actions';
import { UserActions } from './user/actions';
import { BuildingActions } from './building/actions';
import { BookingActions } from './booking/actions';
 
export type AllActions = 
    | AuthActions
    | BookingActions
    | BuildingActions
    | UserActions