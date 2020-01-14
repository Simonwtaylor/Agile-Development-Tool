import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { SprintDropdownContainer } from '../components/dropdowns';
import SprintContainer from '../components/sprints/sprint.container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentSprint } from '../redux/sprint/sprint.selector';
import { ISprint, IBoard, ITask } from '../lib/types';
import { AddSprint } from '../components/add-sprint';

export interface ISprintProps {
  sprint: ISprint;
}
 
const Sprint: React.FC<ISprintProps> = ({
  sprint,
}) => {
  console.log(sprint);
  const [selectedSprint, onSelectedSprint] = React.useState(
    sprint ? sprint.id : ''
  );

  const handleSelectSprint = (sprintSelected: any) => {
    onSelectedSprint(sprintSelected.value);
  };

  const renderBoardsSection = () => {
    if (!selectedSprint || selectedSprint === '') { 
      return (
        <h2>
          Please select a Sprint
        </h2>
      );
    }

    return (
      <Grid.Row>
        <SprintContainer 
          sprintId={+selectedSprint}
        />
      </Grid.Row>
    )
  };

  const calculatePoints = () => {
    if (!sprint) {
      return <></>;
    }

    let points = 0;

    if (sprint.boards) {
      sprint.boards.forEach((board: IBoard) => {
        board.tasks
          .filter(a => a.completed === false)
          .forEach((task: ITask) => points += task.storyPoints);
      });
    }

    return (
      <span
        style={{
          paddingLeft: '10px',
          paddingRight: '10px'
        }}
      >
        {points} Points remaining
      </span>
    );
  };


  const getDayColour = (days: number): string => {
    if (days > 0) {
      return 'green';
    }
    return 'red';
  };

  const getDaysLeft = () => {
    if (sprint) {
      const { endDate } = sprint;
      const a = new Date();
      const b = new Date(endDate);
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;

      const difference = Math.floor((utc2 - utc1) / _MS_PER_DAY);

      return (
      <span className={getDayColour(difference)}>
        Days Left: {difference}
      </span>
      );
    }

    return <></>;
  }

  return (
    <>
      <h1>Sprints <span role="img" aria-label="rocket">📆</span></h1>
      <Grid columns={4} padded>
        <Grid.Row>
          <Grid.Column>
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
              <AddSprint

              />
            </div>
          </Grid.Column>
          <Grid.Column>
            {getDaysLeft()}
            {calculatePoints()}
          </Grid.Column>
        </Grid.Row>
        {renderBoardsSection()}
      </Grid>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  sprint: selectCurrentSprint,
});

export default connect(mapStateToProps)(Sprint);