import * as React from 'react';
import BoardColumn from '../components/board-column/board-column.component';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTasks } from '../redux/tasks/tasks.selector';
import { selectBoards } from '../redux/boards/boards.selector';

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
    const { boards, tasks } = this.props;
    return(
      <>
        <h1>This Sprint <span role="img" aria-label="rocket">🚀</span></h1>
        <Grid columns={4} padded>
          <Grid.Row>
          {
            boards.map(boardcol => {
              return (
                <Grid.Column>
                  <Card>
                    <BoardColumn 
                      key={boardcol.columnId} 
                      tasks={tasks.filter(t => t.assignedColumn === boardcol.columnId)} 
                      columnId={boardcol.columnId} 
                      columnTitle={boardcol.columnTitle} 
                      color={boardcol.color}
                    />
                  </Card>
                </Grid.Column>
              )
            })
          }
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