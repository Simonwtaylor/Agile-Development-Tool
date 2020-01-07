import { createSelector } from "reselect";

const selectSprintReducer = (state: any) => state.sprint;

export const selectCurrentSprint = createSelector(
    [selectSprintReducer],
    (_sprint: any) => _sprint.currentSprint
);