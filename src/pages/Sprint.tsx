import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { SprintContainer } from '../components/sprints/';
import { useSelector } from 'react-redux';
import { selectCurrentSprint } from '../redux/sprint/sprint.selector';
import {  IBoard, ITask } from '../lib/types';
import { DateService } from '../services';

export interface ISprintProps {}
 
const Sprint: React.FC<ISprintProps> = () => {
  const sprint = useSelector(selectCurrentSprint);

  const renderBoardsSection = () => {
    if (!sprint) { 
      return (
        <h2>
          Please select a Sprint or add a new one
        </h2>
      );
    }

    return (
      <Grid.Row>
        <SprintContainer 
          sprintId={+sprint.id}
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
      const difference = DateService.getDaysDifference(a, b);

      return (
      <span className={getDayColour(difference)}>
        Days Left: {difference}
      </span>
      );
    }

    return <></>;
  };

  // const getAddNewSprint = () => {
  //   if (addNewSprint) {
  //     return (
  //       <Grid.Row>
  //         <Grid.Column width={16}>
  //           <h4>
  //             New Sprint:
  //           </h4>
  //           <AddSprintContainer />
  //         </Grid.Column>
  //       </Grid.Row>
  //     );
  //   }

  //   return <></>;
  // };

  return (
    <>
     <Grid columns={4} padded>
        <Grid.Row>
          <Grid.Column>
            {getDaysLeft()}
            {calculatePoints()}
          </Grid.Column>
        </Grid.Row>
        {/* {getAddNewSprint()} */}
        {renderBoardsSection()}
      </Grid>
    </>
  );
}

export default Sprint;