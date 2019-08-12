import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTasks } from '../redux/tasks/tasks.selector';
import { selectBoards } from '../redux/boards/boards.selector';
import BoardsContainer from '../components/boards/boards.container';

export interface IBoardProps {
  boards: any[];
  tasks: any[];
}
 
export interface IBoardState {
}

class Board extends React.Component<IBoardProps, IBoardState>{
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <>
        <h1>This Sprint <span role="img" aria-label="rocket">🚀</span></h1>
        <Grid columns={4} padded>
          <Grid.Row>
            <BoardsContainer />
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  boards: selectBoards, 
  tasks: selectTasks
});

export default connect(mapStateToProps)(Board);