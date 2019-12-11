import * as React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { ITeam } from '../../lib/types';
import { ADD_USER_TO_TEAM, GET_ALL_TEAMS } from '../../queries';
import { TeamItem } from './';

export interface ITeamItemContainerProps {
  team: ITeam;
}
 
const TeamItemContainer: React.FC<ITeamItemContainerProps> = ({
  team,
}) => {

  const client = useApolloClient();

  const [addUserToTeam] = useMutation(ADD_USER_TO_TEAM, {
    client,
  });

  const handleAddUserToTeam = (boardId: number, userId: number) => {
    addUserToTeam({
      variables: {
        userId,
        id: boardId,
      },
      refetchQueries: [
        {
          query: GET_ALL_TEAMS,
        }
      ],
    });
  };

  return (
    <TeamItem
      key={`teamitemcomponent${team.id}`}
      {...team}
      onAddUserToTeam={handleAddUserToTeam}
    />
  );
}
 
export default TeamItemContainer;