import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectCurrentTask } from '../../redux/tasks/tasks.selector';
import { createStructuredSelector } from 'reselect';

export interface TaskProps {
  task?: any;
}
 
const TaskDetail: React.FC<TaskProps> = ({
  task
}) => {
  return (
    <Card>
      {task.title}
    </Card>
  );
}
 
const mapStateToProps = createStructuredSelector({
  task: selectCurrentTask
})

export default connect(mapStateToProps)(TaskDetail);