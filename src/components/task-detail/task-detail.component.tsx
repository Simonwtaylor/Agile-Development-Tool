import * as React from 'react';
import { Card, Form } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';
import './task-detail.styles.scss';
import { ITask } from '../../lib/types';

export interface ITaskDetailProps {
  taskDetail?: ITask;
}
 
const TaskDetail: React.FC<any> = ({
  taskDetail
}) => {
  const [task, setTask] = React.useState(taskDetail);

  // const handleDescriptionChange = (e:any) => {

  // };

  return (
    <Card>
      <Form>
        <Card.Content header={task.title} />
        <Card.Content>
          <Form.Field>
            <label>Description</label>
            <input 
              placeholder='Description...'
              value={task.description}
              name={'description'}
              // onChange={handleDescriptionChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Story Points</label>
            <input placeholder='Story Points' value={task!.storyPoints} type='number' />
          </Form.Field>
          <Form.Field>
            <label>Stage</label>
            <input placeholder='Stage...' value={task!.assignedColumn} />
          </Form.Field>
          <Form.Field>
            <label>User</label>
            <input placeholder='User...' value={task!.assignedUser} />
          </Form.Field>
        </Card.Content>
        <CustomButton color={'green'} inverted>
          💾 Update Task
        </CustomButton>
      </Form>
    </Card>
  );
}

export default TaskDetail;