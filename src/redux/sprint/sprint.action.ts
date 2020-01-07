import { SprintActionTypes } from "./sprint.types";

export const setCurrentSprint = (sprint: any) => ({
  type: SprintActionTypes.SET_CURRENT_SPRINT, 
  payload: sprint
});