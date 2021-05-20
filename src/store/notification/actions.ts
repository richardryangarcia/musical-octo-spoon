import { Action, ActionCreator } from "redux";
import { Notification } from "./reducers";
import shortid from "shortid";

export enum ActionTypes {
  ADD_NOTIFICATION = "@@notifications/ADD_NOTIFICATION",
  REMOVE_NOTIFICATION = "@@notifications/REMOVE_NOTIFICATION",
}

interface addNotificationAction extends Action {
  type: ActionTypes.ADD_NOTIFICATION;
  payload: Notification;
}

interface removeNotificationAction extends Action {
  type: ActionTypes.REMOVE_NOTIFICATION;
  payload: { id: string };
}

export type NotificationActions = addNotificationAction | removeNotificationAction;

export const addNotification: ActionCreator<addNotificationAction> = (
  payload: any
) => {
  return {
    type: ActionTypes.ADD_NOTIFICATION,
    payload: {
      id: shortid.generate(),
      message: payload,
    },
  };
};

export const removeNotification: ActionCreator<removeNotificationAction> = (
  payload: any
) => {
  return {
    type: ActionTypes.REMOVE_NOTIFICATION,
    payload,
  };
};
