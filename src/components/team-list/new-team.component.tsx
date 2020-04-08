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
          color={'green'}
          inverted={true}
          size={'small'}
          onClick={handleNewTeamClick}
        >
          <Icon name='plus' /> Add Team
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
          onClick={handleNewTeamSubmit}
        >
          Save
        </CustomButton>
      </>
    )
  };

  return (
    <>{renderNewTeam()}</>
  );
}
 
export default NewTeam;