import * as React from 'react';
import { Grid, Card, Form } from 'semantic-ui-react';
import BoardColumn from '../board-column/board-column.component';
import CustomButton from '../custom-button/custom-button.component';
import './boards.style.scss';

export interface IBoardsProps {
  boards: any[];
  onAddNewBoard: (name: string) => void;
}
 
const Boards: React.FC<IBoardsProps> = ({
  boards,
  onAddNewBoard, 
}) => {

  // Hooks
  const [newBoard, setNewBoard] = React.useState(false);
  const [boardName, setBoardName] = React.useState('');

  const handleBoardSubmit = () => {
    onAddNewBoard(boardName);
    setNewBoard(!newBoard);
  };

  const handleBoardNameChange = (e: any) => {
    setBoardName(e.target.value);
  };

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
    <Grid.Column key={'addnewboard'}>
      <Card className={'board'}>
        <div className="col card">
          <div className="card-body card-container">
            {(!newBoard && 
            <>
              <h3>Add New Board</h3>
              <CustomButton 
                inverted={true}
                color={'green'}
                onClick={() => setNewBoard(!newBoard)}
              >
                <span role="img" aria-label="save">➕</span> Add New Board
              </CustomButton>
            </>
            )}
            {(newBoard && 
            <>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input 
                    placeholder='Name...'
                    value={boardName}
                    name={'name'}
                    onChange={handleBoardNameChange}
                  />
                </Form.Field>
                <CustomButton 
                  inverted={true}
                  color={'green'}
                  onClick={handleBoardSubmit}
                >
                  <span role="img" aria-label="save">💾</span> Save New Board
                </CustomButton>
              </Form>
            </>
            )}
          </div>
        </div>
      </Card>
    </Grid.Column>
    </>
  );
}
 
export default Boards;