import * as React from 'react';
import { Card, Form } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';
import './task-detail.styles.scss';
import { ITask } from '../../lib/types';
import BoardDropdownContainer from '../dropdowns/board-dropdown.container';
import UserDropdownContainer from '../dropdowns/user-dropdown.container';
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

  const handleFormChange = (e:any) => {
    const taskNew = {...task}

    let value = e.target.value;
    if(e.target.name === 'storyPoints') {
      value = Number.parseFloat(value);
    }
    taskNew[e.target.name] = value;
    setTask({
      ...taskNew
    });
  };

  const handleSelectChange = (selectItem: any) => {
    const taskNew = {...task}

    let value = selectItem.value;

    taskNew[selectItem.name] = value;
    setTask({
      ...taskNew
    });
  };

  const handleCompleteClick = () => {
    const {
      _id,
    } = task;
    onTaskComplete(_id);
  };

  const handleSubmitClick = () => {
    const {
      _id,
      title,
      description,
      completed,
      storyPoints,
      userId,
      boardId,
    } = task;

    onTaskSave({
      _id,
      title,
      completed,
      description,
      storyPoints,
      userId,
      boardId
    });
  };

  const getButtonFill = (completed: boolean) => {
    if (!completed) {
      return true;
    }
    return false;
  };

  return (
    <Card>
      <Form>
        <Card.Content>
          <Card.Header>
            {
              (mode === TaskDetailMode.EDIT && 
                <CustomButton
                  color={'green'}
                  circular
                  inverted={getButtonFill(task.completed)}
                  icon='check' 
                  onClick={handleCompleteClick}
                  style={{ float: 'right' }}
                >
                </CustomButton>
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
              placeholder='Story Points' 
              value={task!.storyPoints} 
              type='number' 
              name={'storyPoints'}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Board</label>
            <BoardDropdownContainer
              handleBoardSelect={handleSelectChange}
              selectedBoard={task!.boardId}
              name={'boardId'}
            />
          </Form.Field>
          <Form.Field>
            <label>User</label>
            <UserDropdownContainer
              onSelectUser={handleSelectChange}
              selectedUser={task!.userId}
              name={'userId'}
            />
          </Form.Field>
        </Card.Content>
        <CustomButton color={'green'} inverted onClick={handleSubmitClick}>
          <span role="img" aria-label="save">💾</span> {buttonText}
        </CustomButton>
      </Form>
    </Card>
  );
}

export default TaskDetail;