import * as React from 'react';
import { CustomButton } from '../../components/custom-button';
import { Input, InputOnChangeData, Button, Icon } from 'semantic-ui-react';

export interface INewTeamProps {
  onNewTeamSubmit: (name: string) => void;
}
 
const NewTeam: React.FC<INewTeamProps> = ({
  onNewTeamSubmit,
}) => {

  const [newTeam, setNewTeam] = React.useState(false);
  const [teamName, setTeamName] = React.useState('');

  const handleNewTeamClick = () => {
    setNewTeam(!newTeam);
  };

  const handleTeamNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    _data: InputOnChangeData,
  ) => {
    setTeamName(event.currentTarget.value);
  };

  const handleNewTeamSubmit = () => {
    onNewTeamSubmit(teamName);
  };

  const renderNewTeam = () => {
    if (!newTeam) {
      return (
        <Button
          animated={true}
          color={'green'}
          inverted={true}
          size={'small'}
          onClick={handleNewTeamClick}
        >
          <Button.Content visible>
            <Icon name='plus' />
          </Button.Content>
          <Button.Content hidden>
            Add
          </Button.Content>
        </Button>
      )
    }

    return (
      <>
        <Input
          value={teamName}
          onChange={handleTeamNameChange}
          placeholder={'New team name'}
        />
        <CustomButton
          color={'green'}
          inverted={true}
          onClick={handleNewTeamSubmit}
        >
          Add
        </CustomButton>
      </>
    )
  };

  return (
    <>{renderNewTeam()}</>
  );
}
 
export default NewTeam;