import * as React from 'react';
import { TeamList } from './';
import { gql } from 'apollo-boost';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';

export interface ITeamListContainerProps {

}

export const GET_ALL_TEAMS = gql`
  query {
    teams {
      id
      name
      users {
        id
        photoURL
        displayName
      }
    }
  }
`;

export const ADD_USER_TO_TEAM = gql`
  mutation addUserToTeam($id: String!, $userId: String!) {
    addUserToTeam(id: $id, userId: $userId) {
      id
    }
  }
`;

const TeamListContainer: React.FC<ITeamListContainerProps> = ({

}) => {

  const client = useApolloClient();

  const [addUserToTeam] = useMutation(ADD_USER_TO_TEAM, {
    client,
  });

  const handleAddUserToTeam = (boardId: string, userId: string) => {
    addUserToTeam({
      variables: {
        userId,
        _id: boardId,
      },
    });
  };

  const { loading, error, data } = useQuery(GET_ALL_TEAMS, { client });

  if(error) return <h1>Error loading teams</h1>;
  if(loading) return <h3>Loading teams...</h3>

  const teamElements = [];

  for (let team of data.teams) {
    teamElements.push(
      <TeamList 
        team={team}
        onAddUserToTeam={handleAddUserToTeam}
      />
    )
  }

  return (
    <>
      {teamElements}
    </>
  );
};

export default TeamListContainer;