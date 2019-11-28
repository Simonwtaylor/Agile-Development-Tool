import * as React from 'react';
import { connect } from 'react-redux';
import { ITask } from '../lib/types';
import { TaskCard } from '../components/task-card/';
import { createStructuredSelector } from 'reselect';
import { selectBacklogTasks } from '../redux/backlog/backlog.selector';
import { Grid } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IBacklogProps extends RouteComponentProps {
  tasks: ITask[];
}
 
export interface IBacklogState {
  
}
 
class Backlog extends React.Component<IBacklogProps, IBacklogState> {
  constructor(props: IBacklogProps) {
    super(props);
    this.state = {};
  }

  private handleTaskClick = (id: number) => {
    this.props.history.push(`/task/${id}`);
  };

  render() { 
    const { tasks } = this.props;

    return (
      <>
        <h1>Backlog <span role="img" aria-label="backlog">📓</span></h1>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
            {
              tasks.map((task: ITask) => {
                return (
                  <TaskCard 
                    onTaskClick={this.handleTaskClick}
                    key={task.id}
                    {...task}
                  />)
              })
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  tasks: selectBacklogTasks,
});

export default connect(mapStateToProps)(withRouter(Backlog));