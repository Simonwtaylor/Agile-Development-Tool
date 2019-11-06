import { createSelector } from "reselect";

const backlogReducer = (state: any) => state.backlog;

export const selectBacklogTasks = createSelector(
    [backlogReducer], 
    (_backlog) => _backlog.tasks,
);