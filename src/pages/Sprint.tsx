import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { SprintDropdownContainer } from '../components/dropdowns';
import { BoardsContainer } from '../components/boards';

export interface ISprintProps {
  
}
 
const Sprint: React.FC<ISprintProps> = () => {

  const [selectedSprint, onSelectedSprint] = React.useState('');

  const handleSelectSprint = (sprint: any) => {
    console.log(sprint)
    onSelectedSprint(sprint.value);
  };

  const renderBoardsSection = () => {
    if (!selectedSprint || selectedSprint === '') { 
      return <></>;
    }

    return (
      <Grid.Row>
        <BoardsContainer 
          sprintId={+selectedSprint}
        />
      </Grid.Row>
    )
  };

  return (
    <>
      <h1>Sprints <span role="img" aria-label="rocket">📆</span></h1>
      <Grid columns={4} padded>
        <Grid.Row>
          <div
            style={{
              width: '200px',
              paddingLeft: '30px'
            }}
          >
            <SprintDropdownContainer  
              name={'sprintId'}
              onSelectSprint={handleSelectSprint}
            />
          </div>
        </Grid.Row>
        {renderBoardsSection()}
      </Grid>
    </>
  );
}
 
export default Sprint;