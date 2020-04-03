import * as React from 'react';
import { Grid, Popup, Icon } from 'semantic-ui-react';
import { SprintDropdownContainer } from '../components/dropdowns';
import SprintContainer from '../components/sprints/sprint.container';
import { useSelector } from 'react-redux';
import { selectCurrentSprint } from '../redux/sprint/sprint.selector';
import {  IBoard, ITask } from '../lib/types';
import { AddSprintContainer } from '../components/add-sprint';
import { DateService } from '../services';

export interface ISprintProps {}
 
const Sprint: React.FC<ISprintProps> = () => {
  const sprint = useSelector(selectCurrentSprint)

  const [selectedSprint, onSelectedSprint] = React.useState(
    sprint ? sprint.id : ''
  );

  const [addNewSprint, setAddNewSprint] = React.useState(false);

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

  const getSprintToggleButton = () => {
    if (!addNewSprint) {
      return (
        <Popup
          content={'Add new sprint'}
          key={`sprintaddnewsprint`}
          trigger={
            <Icon
              color={'green'}
              name={'plus circle'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={handleAddNewSprintClick}
            />
          }
        />
      )
    }

    return (
      <Popup
        content={'Cancel add new sprint'}
        key={`sprintaddnewsprint`}
        trigger={
          <Icon
            color={'red'}
            name={'ban'}
            style={{
              cursor: 'pointer',
              marginTop: '5px'
            }}
            onClick={handleAddNewSprintClick}
          />
        }
      />
    );
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

  const getAddNewSprint = () => {
    if (addNewSprint) {
      return (
        <Grid.Row>
          <Grid.Column width={16}>
            <h4>
              New Sprint:
            </h4>
            <AddSprintContainer />
          </Grid.Column>
        </Grid.Row>
      );
    }

    return <></>;
  };

   const handleAddNewSprintClick = () => {
    setAddNewSprint(!addNewSprint);
   };

  return (
    <>
      <h1>{(sprint && sprint.name) || 'Sprints'} <span role="img" aria-label="rocket">📆</span></h1>
      <Grid columns={4} padded>
        <Grid.Row>
          <Grid.Column>
            <div
              style={{
                width: '300px',
                paddingLeft: '30px'
              }}
            >
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column
                    width={13}
                  >
                    <SprintDropdownContainer  
                      name={'sprintId'}
                      selectedSprint={(sprint) ? sprint.id : ''}
                      onSelectSprint={handleSelectSprint}
                    />
                  </Grid.Column>
                  <Grid.Column
                    width={3}
                  >
                    {getSprintToggleButton()}
                  </Grid.Column>
                </Grid.Row>
              </Grid> 
            </div>
          </Grid.Column>
          <Grid.Column>
            {getDaysLeft()}
            {calculatePoints()}
          </Grid.Column>
        </Grid.Row>
        {getAddNewSprint()}
        {renderBoardsSection()}
      </Grid>
    </>
  );
}

export default Sprint;