import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const UserReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, 
        currentUser: action.payload
      }
    case UserActionTypes.SIGN_IN_SUCCESS: 
      return {
        ...state, 
        currentUser: action.payload, 
        error: null
      }
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state, 
        error: action.payload
      }
    default: 
      return state;
  }
}

export default UserReducer;