import { all, call, put, takeLatest } from "redux-saga/effects";
import { createUserProfileDocument, auth, googleProvider, getCurrentUser } from "../../firebase/firebase.utils";
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from "./user.action";
import { UserActionTypes } from "./user.types";

export function* getSnapshotFromUserAuth(user: any, additionalData: any) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({
      id: userSnapshot.id, 
      ...userSnapshot.data()
    }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user, null);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.SIGN_IN_WITH_GOOGLE_START,
    signInWithGoogle
  );
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if(!user) return;

    yield getSnapshotFromUserAuth(user, null);
  } catch (error) {
    yield put(signInFailure(error));  
  }
}

export function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  )
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_START, 
    signOut
  );
}

export function* userSagas() {
  yield all(
    [
      call(onGoogleSignInStart),
      call(onCheckUserSession),
      call(onSignOutStart), 
    ]
  )
}