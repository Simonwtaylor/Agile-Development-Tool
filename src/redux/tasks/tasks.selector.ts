import { createSelector } from "reselect";
import { ITask } from "../../lib/types";

const selectTaskReducer = (state: any) => state.tasks;

export const selectTasks = createSelector(
    [selectTaskReducer],
    (_tasks: any) => {
        return _tasks.tasks
    }
);

export const selectTask = (taskId: number) => createSelector(
    [selectTasks],
    (tasks: ITask[]) => tasks.find(t => t.id === taskId)
);

export const selectCurrentTask = createSelector(
    [selectTaskReducer],
    (_tasks: any) => {return _tasks.task}
);