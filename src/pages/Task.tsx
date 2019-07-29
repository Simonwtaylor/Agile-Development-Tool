import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentTask } from '../redux/tasks/tasks.action';
import TaskDetail from '../components/task-detail/task-detail.component';
export interface ITaskProps {
  history: any, 
  match: any,
  location: any,
  setCurrentTask?: any;
}
 
const Task: React.FC<any> = ({
  history, 
  match, 
  location, 
  setCurrentTask
}) => {

  setCurrentTask(match.params.id);

  return (
    <>
      <h1>Task</h1>
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <TaskDetail />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentTask: (taskId: any) => dispatch(setCurrentTask(taskId))
});

export default connect(null, mapDispatchToProps)(withRouter(Task));