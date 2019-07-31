import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER, 
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.SIGN_IN_WITH_GOOGLE_START
});

export const signInSuccess = (user: any) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS, 
  payload: user
});

export const signInFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_IN_SUCCESS
});

export const signOutFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});