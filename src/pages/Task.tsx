import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentTask } from '../redux/tasks/tasks.action';
import {
  TaskDetailContainer,
  TaskAddContainer,
} from '../components/task-detail/';

export interface ITaskProps extends RouteComponentProps<any>  {
  setCurrentTask: (id: string) => void;
}

const Task: React.FC<ITaskProps> = ({
  match,
  setCurrentTask,
}) => {

  setCurrentTask(match.params.id);
  
  return (
    <div className={'task'}>
      <Grid padded>
        <Grid.Row stretched>
          <Grid.Column stretched>
            {
              (match.params.id === 'new')
              ? (<TaskAddContainer />)
              : (<TaskDetailContainer />)
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentTask: (taskId: any) => dispatch(setCurrentTask(taskId)),
});

export default connect(null, mapDispatchToProps)(withRouter(Task));