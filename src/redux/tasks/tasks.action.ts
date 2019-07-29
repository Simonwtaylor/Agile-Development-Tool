import { TaskActionTypes } from "./tasks.types";

export const setCurrentTask = (taskId: any) => ({
  type: TaskActionTypes.SET_CURRENT_TASK,
  payload: taskId
});