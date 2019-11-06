import { BoardsActionTypes } from "./boards.types";

export const setBoards = (boards: any[]) => ({
  type: BoardsActionTypes.SET_BOARDS,
  payload: boards,
});