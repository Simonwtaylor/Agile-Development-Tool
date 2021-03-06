import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import BoardsReducer from './boards/boards.reducer';
import TasksReducer from './tasks/tasks.reducer';
import TeamReducer from './team/team.reducer';
import BacklogReducer from './backlog/backlog.reducer';
import NotificationsReducer from './notifications/notifications.reducer';
import SprintReducer from './sprint/sprint.reducer';

export default combineReducers({
  user: UserReducer,
  boards: BoardsReducer,
  tasks: TasksReducer,
  team: TeamReducer,
  backlog: BacklogReducer,
  notifications: NotificationsReducer,
  sprint: SprintReducer,
});