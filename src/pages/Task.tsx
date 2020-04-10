import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentTask } from '../redux/tasks/tasks.action';
import {
  TaskDetailContainer,
  TaskAddContainer,
} from '../components/task-detail/';

export interface ITaskProps extends RouteComponentProps<any> {}

const Task: React.FC<ITaskProps> = ({
  match,
}) => {
  const dispatch = useDispatch();

  dispatch(setCurrentTask(match.params.id));
  
  return (
    <div
      className={'task'}
      style={{
        padding: '10px 40px'
      }}
    >
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

export default withRouter(Task);