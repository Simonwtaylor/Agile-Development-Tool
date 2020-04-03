import * as React from 'react';
import { NewTeam } from './';
import { addTeam } from '../../mutations';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { getAllTeams } from '../../queries';
import { ITeam } from '../../lib/types';

export interface INewTeamContainerProps {
  
}
 
const NewTeamContainer: React.FC<INewTeamContainerProps> = () => {
  const client = useApolloClient();
  
  const handleNewTeamSubmit = (teamName: string) => {
    handleTeamSave({
      id: 0,
      name: teamName,
      users: [],
    })
  };

  const [addTeamMutation] = useMutation(addTeam, {
    client,
  });

  const handleTeamSave = (team: ITeam) => {

    addTeamMutation({ 
      variables: {
        team: { ...team },
      },
      refetchQueries: [
        {
          query: getAllTeams
        }
      ]
    });
  };


  return (
    <NewTeam
      onNewTeamSubmit={handleNewTeamSubmit}
    />
  );
}
 
export default NewTeamContainer;