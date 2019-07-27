import { createSelector } from "reselect";

const selectBoardsReducer = (state: any) => state.boards;

export const selectBoards = createSelector(
    [selectBoardsReducer],
    (_board: any) => _board.boards
);

export const selectBoard = (boardId: string) => createSelector(
    [selectBoards],
    (boards: any[]) => boards.find(b => b.id === boardId)
);