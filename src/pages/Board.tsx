import * as React from 'react';
import { Grid } from 'semantic-ui-react';
// import { BoardsContainer } from '../components/boards';

export interface IBoardProps {

}

const Board: React.FC<IBoardProps> = () => {
  return(
    <>
      <h1>This Sprint <span role="img" aria-label="rocket">🚀</span></h1>
      <Grid columns={4} padded>
        <Grid.Row>
          {/* <BoardsContainer /> */}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Board;