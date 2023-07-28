// src/reducers.ts
import { AppState, AppAction, ActionType } from './types';



const initialState: AppState = {
  counter: 0,
};

const rootReducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ActionType.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default rootReducer;
