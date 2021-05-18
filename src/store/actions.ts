import { AuthActions} from './auth/actions';
import { UserActions } from './user/actions';
import { BuildingActions } from './building/actions';

export type AllActions = 
    | AuthActions
    | BuildingActions
    | UserActions