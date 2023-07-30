import { USER_ACTION_TYPES } from "../ActionTypes/types";
import { Dispatch } from "redux";
import { UserCredential } from "./types";

export const logIn = (userCredential: UserCredential) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USER_ACTION_TYPES.IS_USER_LOGGED,
      payload: true,
    });
  };
};

export const logOut = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USER_ACTION_TYPES.IS_USER_LOGGED,
      payload: true,
    });
  };
};



