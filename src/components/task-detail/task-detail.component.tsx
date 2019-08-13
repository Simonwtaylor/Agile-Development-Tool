import * as React from 'react';
import { Card, Form } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';
import './task-detail.styles.scss';
import { ITask } from '../../lib/types';

export interface ITaskDetailProps {
  taskDetail?: ITask;
  onTaskSave: (task: ITask) => void;
  buttonText: string;
}
 
const TaskDetail: React.FC<any> = ({
  taskDetail,
  onTaskSave,
  buttonText,
}) => {
  const [task, setTask] = React.useState(taskDetail);

  const handleFormChange = (e:any) => {
    const taskNew = {...task};
    let value = e.target.value;
    if(e.target.name === 'storyPoints'|| e.target.name === 'boardId') {
      value = Number.parseFloat(value);
    }
    taskNew[e.target.name] = value;
    setTask({
      ...taskNew
    });
  };

  const handleSubmitClick = () => {
    const {
      _id,
      title,
      description,
      storyPoints,
      userId,
      boardId,
    } = task;
    onTaskSave({
      _id,
      title,
      description,
      storyPoints,
      userId,
      boardId
    });
  };

  return (
    <Card>
      <Form>
        <Card.Content header={task.title} />
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
            <label>Stage</label>
            <input 
              placeholder='Stage...' 
              value={task!.boardId} 
              name={'assignedColumn'}
              onChange={handleFormChange}
            />
          </Form.Field>
          <Form.Field>
            <label>User</label>
            <input 
              placeholder='User...' 
              value={task!.userId}
              name={'assignedUser'}
              onChange={handleFormChange}
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