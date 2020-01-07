import { SprintActionTypes } from "./sprint.types";

const INITIAL_STATE = {
  currentSprint: null,
};

const SprintReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case SprintActionTypes.SET_CURRENT_SPRINT:
      return {
        ...state, 
        currentSprint: action.payload
      }
    default: 
      return state;
  }
}

export default SprintReducer;