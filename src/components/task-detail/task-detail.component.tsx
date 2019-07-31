import * as React from 'react';
import { Card, Input, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectCurrentTask } from '../../redux/tasks/tasks.selector';
import { createStructuredSelector } from 'reselect';
import { ITask } from '../../lib/types';

export interface TaskProps {
  task?: ITask;
}
 
const TaskDetail: React.FC<TaskProps> = ({
  task
}) => {
  return (
    <Card>
      <Form>
      <Card.Content header={task!.title} />
      <Card.Content>
        <Form.Field>
          <label>Description</label>
          <input placeholder='Description...' value={task!.description} />
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
      </Form>
    </Card>
  );
}
 
const mapStateToProps = createStructuredSelector({
  task: selectCurrentTask
})

export default connect(mapStateToProps)(TaskDetail);