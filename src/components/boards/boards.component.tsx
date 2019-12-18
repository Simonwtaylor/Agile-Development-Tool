import * as React from 'react';
import { Grid, Card, Form, Button } from 'semantic-ui-react';
import { BoardColumn } from '../board-column/';
import { CustomButton } from '../custom-button/';
import './boards.style.scss';
import { IBoard } from '../../lib/types';

export interface IBoardsProps {
  boards: IBoard[];
  onAddNewBoard: (name: string) => void;
}
 
const Boards: React.FC<IBoardsProps> = ({
  boards,
  onAddNewBoard, 
}) => {

  // Hooks
  const [newBoard, setNewBoard] = React.useState(false);
  const [boardName, setBoardName] = React.useState('');

  // Handlers
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
                key={`boardcol${boardcol.id}`}
                tasks={boardcol.tasks}
                columnId={boardcol.id}
                columnTitle={boardcol.name}
              />
            </Card>
          </Grid.Column>
        );
      })
    }
    <Grid.Column key={'addnewboard'}>
      <Card className={'board add-new'}>
        <div className="col card">
          <div className="card-body card-container">
            {(!newBoard && 
            <>
              <h3>Add New Board</h3>
              <Button
                animated={true}
                color={'green'}
                inverted={true}
                size={'small'}
                onClick={() => setNewBoard(!newBoard)}
              >
                <Button.Content visible>
                <span role="img" aria-label="save">➕</span>
                </Button.Content>
                <Button.Content hidden>
                  Add
                </Button.Content>
              </Button>
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
};

export default Boards;