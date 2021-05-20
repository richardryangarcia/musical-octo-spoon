import { Reducer } from "redux";
import { NotificationActions, ActionTypes } from "./actions";

// INITIAL STATE
export type Notification = {
  id: string;
  message: string;
  timeout?: number;
};

export interface NotificationInitialState {
  notifications: Notification[];
}

export const notificationInitialState: NotificationInitialState = {
  notifications: [],
};

export const notificationReducer: Reducer<NotificationInitialState, NotificationActions> = (
  state: NotificationInitialState = notificationInitialState,
  action: NotificationActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION:
      const newNotifications = [
        ...state.notifications,
        { id: action.payload.id, message: action.payload.message },
      ];
      return {
        ...state,
        notifications: newNotifications,
      };
    case ActionTypes.REMOVE_NOTIFICATION:
      const filteredNotifications = state.notifications.filter(
        (notification) => {
          return notification.id !== action.payload.id;
        }
      );
      return {
        ...state,
        notifications: filteredNotifications,
      };

    default: {
      return state;
    }
  }
};
