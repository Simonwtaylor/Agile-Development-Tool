import * as React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { ITeam } from '../../lib/types';
import { getAllTeams } from '../../queries';
import { TeamItem } from './';
import { addUserToTeam, removeTeam, removeUserFromTeam, setCurrentTask } from '../../mutations';

export interface ITeamItemContainerProps {
  team: ITeam;
}
 
const TeamItemContainer: React.FC<ITeamItemContainerProps> = ({
  team,
}) => {

  const client = useApolloClient();

  const [addUserToTeamMutation] = useMutation(addUserToTeam, {
    client,
  });

  const [removeTeamMutation] = useMutation(removeTeam, {
    client,
  });

  const [removeUserFromTeamMutation] = useMutation(removeUserFromTeam, {
    client,
  });

  const [setCurrentTaskMutation] = useMutation(setCurrentTask, {
    client,
  });

  const handleAddUserToTeam = (boardId: number, userId: number) => {
    addUserToTeamMutation({
      variables: {
        userId,
        id: boardId,
      },
      refetchQueries: [
        {
          query: getAllTeams,
        }
      ],
    });
  };

  const handleRemoveTeam = () => {
    removeTeamMutation({
      variables: {
        id: +team.id,
      },
      refetchQueries: [
        {
          query: getAllTeams,
        }
      ]
    })
  };

  const handleRemoveUser = (teamId: number, userId: number) => {
    removeUserFromTeamMutation({
      variables: {
        id: +teamId,
        userId: +userId,
      },
      refetchQueries: [
        {
          query: getAllTeams,
        }
      ]
    })
  };

  const handleSetCurrentTask = (userId: number, taskId: number) => {
    setCurrentTaskMutation({
      variables: {
        userId,
        taskId,
      },
      refetchQueries: [
        {
          query: getAllTeams,
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