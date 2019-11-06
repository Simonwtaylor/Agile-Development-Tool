import { BoardsActionTypes } from "./boards.types";

const INITIAL_STATE = {
  boards: [{
    columnId: 1,
    columnTitle: 'Backlog 💭',
    color: 'blue'
  },
  {
    columnId: 2,
    columnTitle: 'This Iteration 💻',
    color: 'yellow'
  },
  {
    columnId: 3,
    columnTitle: 'In Review 🍵',
    color: 'purple'
  },
  {
    columnId: 4,
    columnTitle: 'Completed ✌',
    color: 'green'
  }]
};

const BoardsReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case BoardsActionTypes.SET_BOARDS:
      return {
        ...state, 
        boards: action.payload
      }
    default: 
      return state;
  }
}

export default BoardsReducer;