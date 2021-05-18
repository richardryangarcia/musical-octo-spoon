import { combineEpics } from "redux-observable";
import { AuthEpics } from './auth/epics';
import { BuildingEpics } from './building/epics';
import { UserEpics } from './user/epics';

export const epics = combineEpics(
    ...AuthEpics,
    ...UserEpics,
    ...BuildingEpics
);