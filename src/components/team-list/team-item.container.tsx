import * as React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { ITeam } from '../../lib/types';
import { ADD_USER_TO_TEAM, GET_ALL_TEAMS } from '../../queries';
import { TeamItem } from './';
import { REMOVE_TEAM, REMOVE_USER_FROM_TEAM, SET_CURRENT_TASK } from '../../mutations';

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

  const [removeTeam] = useMutation(REMOVE_TEAM, {
    client,
  });

  const [removeUserFromTeam] = useMutation(REMOVE_USER_FROM_TEAM, {
    client,
  });

  const [setCurrentTask] = useMutation(SET_CURRENT_TASK, {
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

  const handleRemoveTeam = () => {
    removeTeam({
      variables: {
        id: +team.id,
      },
      refetchQueries: [
        {
          query: GET_ALL_TEAMS,
        }
      ]
    })
  };

  const handleRemoveUser = (teamId: number, userId: number) => {
    removeUserFromTeam({
      variables: {
        id: +teamId,
        userId: +userId,
      },
      refetchQueries: [
        {
          query: GET_ALL_TEAMS,
        }
      ]
    })
  };

  const handleSetCurrentTask = (userId: number, taskId: number) => {
    setCurrentTask({
      variables: {
        userId,
        taskId,
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
      onRemoveTeam={handleRemoveTeam}
      onRemoveUserFromTeam={handleRemoveUser}
      onSetCurrentTask={handleSetCurrentTask}
    />
  );
}
 
export default TeamItemContainer;