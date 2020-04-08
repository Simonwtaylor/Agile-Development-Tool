import * as React from 'react';
import { SprintDropdownContainer } from '../dropdowns';
import { GraphQLService } from '../../services';
import { useApolloClient } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import { setCurrentSprint } from '../../redux/sprint/sprint.action';
import { ISprint } from '../../lib/types';
import { Popup, Icon } from 'semantic-ui-react';
import { EndSprintContainer } from '../sprints/';

export interface ISprintSelectorContainerProps {
  currentSprint?: ISprint;
  addNewSprint: boolean;
}
 
const SprintSelectorContainer: React.FC<ISprintSelectorContainerProps> = ({
  currentSprint,
  addNewSprint,
}) => {
  const dispatch = useDispatch();
  const client = useApolloClient();
  
  const handleSelectSprint = async (selectedSprint: any) => {
    const data = await GraphQLService.getSprintById(client, selectedSprint.value);

    if (data) {
      dispatch(setCurrentSprint(data.sprint))
    }
  };

  const handleAddNewSprintClick = () => {
    console.log('asdasd');
  }

  const getSprintToggleButton = () => {
    if (!addNewSprint) {
      return (
        <>
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
          {(currentSprint && <EndSprintContainer id={currentSprint.id} />)}
        </>
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

  return (
    <div>
      <span role="img" aria-label="rocket" style={{ display: 'inline-block' }}>📆</span>
      <div style={{ display: 'inline-block' }}>
        <SprintDropdownContainer
          name={'sprintId'}
          onSelectSprint={handleSelectSprint}
          selectedSprint={
            (currentSprint
              ? currentSprint.id
              : null
            )
          }
          placeholder={'Select sprint'}
        />
      </div>
      {getSprintToggleButton()}
    </div>
  );
}
 
export default SprintSelectorContainer;