import { USER_ACTION_TYPES } from "./ActionTypes/types";
import {  Action } from 'redux';



export interface UserState {
  isUserLogged: boolean;
  userCredential: any; // Replace 'any' with the type of user credentials
}


const INITIAL_STATE={
    isUserLogged:false,
    userCredential:null,
}

interface MyAction extends Action {
    type: string;
    payload?: any;
  }

export const userReducer=(state=INITIAL_STATE,action:MyAction) :UserState=>{
const {type,payload}=action;
switch(type)
{
    case USER_ACTION_TYPES.IS_USER_LOGGED:
    return { ...state,isUserLogged:payload}

    case USER_ACTION_TYPES.USER_CREDENTIAL:
      return {...state,userCredential:payload}

    default :
    return state;

 }

}


