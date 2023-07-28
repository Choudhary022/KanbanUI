
import { USER_ACTION_TYPES } from "./types";
import {  Action } from 'redux';

const INITIAL_STATE={
    isUserLogged:false
}

interface MyAction extends Action {
    type: string;
    payload?: any;
  }

export const userReducer=(state=INITIAL_STATE,action:MyAction)=>{
const {type,payload}=action;
switch(type)
{
    case USER_ACTION_TYPES.IS_USER_LOGGED:
    return { ...state,isUserLogged:payload}

    default :
    return state;

 }

}

