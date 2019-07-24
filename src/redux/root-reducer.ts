import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import BoardsReducer from './boards/boards.reducer';
import TasksReducer from './tasks/tasks.reducer';

export default combineReducers({
  user: UserReducer,
  boards: BoardsReducer,
  tasks: TasksReducer
});