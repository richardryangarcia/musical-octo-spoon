import { Reducer } from "redux";
import { BuildingActions, BuildingActionTypes } from "./actions";
import { Room, Event } from '../../services/building';

export interface BuildingInitialState {
  loading: boolean;
  rooms?: Room[];
  events?: Event[]
  error?: Error;
}

export const buildingInitialState: BuildingInitialState = {
  loading: false,
  rooms: undefined,
  events: undefined,
  error: undefined,
};

export const buildingReducer: Reducer<BuildingInitialState, BuildingActions> = (
  state: BuildingInitialState = buildingInitialState,
  action: BuildingActions
) => {
  switch (action.type) {
    case BuildingActionTypes.BUILDING_DETAILS:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case BuildingActionTypes.BUILDING_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case BuildingActionTypes.BUILDING_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload.rooms,
        events: action.payload.events
      };
    default: {
      return state;
    }
  }
};
