import * as React from 'react';
import ITask from '../lib/types/ITask';
import BoardColumn from '../components/board-column/board-column.component';
import { Grid, Card } from 'semantic-ui-react';


export interface IBoardProps {
    
}
 
export interface IBoardState {
  boardColumns: any[];
  tasks: ITask[];
}

class Board extends React.Component<IBoardProps, IBoardState>{
  
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      boardColumns: [], 
      tasks: []
    };
  }

  async componentDidMount() {
    const boardColumns = [...this.state.boardColumns];

    boardColumns.push({
      columnId: 1,
      columnTitle: 'Backlog'
    },
    {
      columnId: 2,
      columnTitle: 'This Iteration'
    },
    {
      columnId: 3,
      columnTitle: 'In Review'
    },
    {
      columnId: 4,
      columnTitle: 'Completed'
    });

    const tasks: ITask[] = [
      {
        id: '1', 
        assignedColumn: 1, 
        assignedUser: 'Simon Taylor', 
        storyPoints: 2, 
        title: 'Task 1'
      },
      {
        id: '2', 
        assignedColumn: 1, 
        assignedUser: 'Simon Taylor', 
        storyPoints: 2, 
        title: 'Do something cool'
      },
      {
        id: '3', 
        assignedColumn: 1, 
        assignedUser: 'Simon Taylor', 
        storyPoints: 2, 
        title: 'Do something even cooler'
      },
      {
        id: '3', 
        assignedColumn: 2, 
        assignedUser: 'Simon Taylor', 
        storyPoints: 2, 
        title: 'Do something even cooler'
      }
    ];
      
    this.setState({ boardColumns, tasks });
  }

  render() {
    
    return(
      <>
        <h1>This Sprint</h1>
        <Grid columns={4}>
          <Grid.Row>
          {
            this.state.boardColumns.map(boardcol => {
              return (
                <Grid.Column>
                  <Card>
                    <BoardColumn 
                      key={boardcol.columnId} 
                      tasks={this.state.tasks.filter(t => t.assignedColumn === boardcol.columnId)} 
                      columnId={boardcol.columnId} 
                      columnTitle={boardcol.columnTitle} 
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

export default Board;