import { createSelector } from "reselect";

const selectUserReducer = (state: any) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (_user: any) => _user.currentUser
);