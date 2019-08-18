import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import BoardColumn from '../board-column/board-column.component';
import CustomButton from '../custom-button/custom-button.component';

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
    <div className="col card">
      <div className="card-body card-container">
        <h3>Add New Board</h3>
        <CustomButton 
          inverted={true}
          color={'green'}
          onClick={() => console.log('NEW BOARD')}
        >
          <span role="img" aria-label="save">➕</span> Add New Board
        </CustomButton>
      </div>
    </div> 
    </>
  );
}
 
export default Boards;