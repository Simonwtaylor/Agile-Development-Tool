import * as React from 'react';
import { NewTeam } from './';
import { ADD_TEAM } from '../../mutations';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { GET_ALL_TEAMS } from '../../queries';
import { ITeam } from '../../lib/types';

export interface INewTeamContainerProps {
  
}
 
const NewTeamContainer: React.FC<INewTeamContainerProps> = () => {

  
  const client = useApolloClient();
  
  const handleNewTeamSubmit = (teamName: string) => {
    handleTaskSave({
      id: 0,
      name: teamName,
      users: [],
    })
  };

  const [addTeam] = useMutation(ADD_TEAM, {
    client,
  });

  const handleTaskSave = (team: ITeam) => {

    addTeam({ 
      variables: {
        team: {...team},
      },
      refetchQueries: [
        {
          query: GET_ALL_TEAMS
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