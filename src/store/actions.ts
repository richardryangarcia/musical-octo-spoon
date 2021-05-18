import { AuthActions} from './auth/actions';
import { UserActions } from './user/actions';

export type AllActions = 
    | AuthActions
    | UserActions