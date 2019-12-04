import * as React from 'react';
import { Card, Form } from 'semantic-ui-react';
import { CustomButton } from '../custom-button';
import './task-detail.styles.scss';
import { ITask } from '../../lib/types';
import {
  BoardDropdownContainer,
  UserDropdownContainer,
} from '../dropdowns';
import { TaskDetailMode } from './task-detail.enum';

export interface ITaskDetailProps {
  taskDetail?: ITask;
  onTaskSave: (task: ITask) => void;
  buttonText: string;
  mode: TaskDetailMode;
  onTaskComplete?: (task: string) => void;
}
 
const TaskDetail: React.FC<any> = ({
  taskDetail,
  onTaskSave,
  buttonText,
  mode,
  onTaskComplete,
}) => {

  const [task, setTask] = React.useState(taskDetail);

  const [selectedBoard, onSelectedBoard] = React.useState(
    (task && task.board && task.board.id) ? task.board.id : null
  );

  const [selectedUser, onSelectedUser] = React.useState(
    (task && task.user && task.user.id) ? task.user.id : null
  );

  const handleFormChange = (e: any) => {
    const taskNew = {...task};
    let value = e.target.value;

    if (e.target.name === 'storyPoints') {
      value = Number.parseFloat(value);
    }

    taskNew[e.target.name] = value;

    setTask({
      ...taskNew,
    });
  };

  const handleUserChange = (selectItem: any) => {
    const taskNew = {...task}

    let value = selectItem.value;

    taskNew.userId = +value;

    setTask({
      ...taskNew
    });

    onSelectedUser(value);
  };

  const handleBoardChange = (selectItem: any) => {
    const taskNew = {...task}

    let value = selectItem.value;

    taskNew.boardId = +value;

    setTask({
      ...taskNew
    });

    onSelectedBoard(value);
  };

  const handleCompleteClick = () => {
    onTaskComplete(task.id);
  };

  const handleSubmitClick = () => {
    onTaskSave({...task});
  };

  const getButtonFill = (completed: boolean): boolean => {
    if (!completed) {
      return true;
    }
    return false;
  };

  return (
    <Card className={'task-detail'}>
      <Form>
        <Card.Content>
          <Card.Header>
            {
              (mode === TaskDetailMode.EDIT && 
                <CustomButton
                  color={'green'}
                  className={'completed'}
                  circular
                  inverted={getButtonFill(task.completed)}
                  icon='check' 
                  onClick={handleCompleteClick}
                />
              )
            }
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder='Title...'
              value={task.title}
              name={'title'}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input 
              placeholder='Description...'
              value={task.description}
              name={'description'}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Story Points</label>
            <input 
              placeholder='Story Points...' 
              value={task!.storyPoints} 
              type='number' 
              name={'storyPoints'}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Board</label>
            <BoardDropdownContainer
              handleBoardSelect={handleBoardChange}
              selectedBoard={selectedBoard}
              name={'boardId'}
            />
          </Form.Field>
          <Form.Field>
            <label>User</label>
            <UserDropdownContainer
              onSelectUser={handleUserChange}
              selectedUser={selectedUser}
              name={'userId'}
            />
          </Form.Field>
          <CustomButton
            className={'submit'}
            color={'green'}
            inverted
            onClick={handleSubmitClick}
          >
            <span role="img" aria-label="save">💾</span> {buttonText}
          </CustomButton>
        </Card.Content>
      </Form>
    </Card>
  );
};

export default TaskDetail;