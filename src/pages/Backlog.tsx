import * as React from 'react';
import { connect } from 'react-redux';
import { ITask } from '../lib/types';
import { TaskCard } from '../components/task-card/';
import { createStructuredSelector } from 'reselect';
import { selectBacklogTasks } from '../redux/backlog/backlog.selector';
import { Grid } from 'semantic-ui-react';

export interface IBacklogProps {
  tasks: ITask[];
}
 
export interface IBacklogState {
  
}
 
class Backlog extends React.Component<IBacklogProps, IBacklogState> {
  constructor(props: IBacklogProps) {
    super(props);
    this.state = {};
  }

  render() { 
    const { tasks } = this.props;

    return (
      <>
        <h1>Backlog <span role="img" aria-label="backlog">📓</span></h1>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
            {
              tasks.map((task: any) => {
                return (
                  <TaskCard 
                    assignedColumn={1}
                    assignedUser={""}
                    description={task.description}
                    id={task.id}
                    key={task.id}
                    storyPoints={task.storyPoints}
                    title={task.title}
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

export default connect(mapStateToProps)(Backlog);