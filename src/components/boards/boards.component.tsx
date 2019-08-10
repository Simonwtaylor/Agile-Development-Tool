import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import BoardColumn from '../board-column/board-column.component';

export interface IBoardsProps {
  boards: any[];
}
 
const Boards: React.FC<IBoardsProps> = ({
  boards
}) => {
  return (
    <>
    {
      boards.map((boardcol, index) => {
        return (
          <Grid.Column key={`board${index}`}>
            <Card>
              <BoardColumn 
                key={boardcol._id} 
                tasks={boardcol.tasks} 
                columnId={boardcol._id} 
                columnTitle={boardcol.name}
              />
            </Card>
          </Grid.Column>
        )
      })
    }
    </>
  );
}
 
export default Boards;