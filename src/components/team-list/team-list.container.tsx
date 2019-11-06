import * as React from 'react';
import { TeamList } from './';
import { gql } from 'apollo-boost';
import { Query, withApollo } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';

export interface ITeamListContainerProps {
  client?: any;
}

const GET_ALL_TEAMS = gql`
  query {
    teams {
      _id
      name
      users {
        _id
        photoURL
        displayName
      }
    }
  }
`;

const ADD_USER_TO_TEAM = gql`
  mutation addUserToTeam($_id: String!, $userId: String!) {
    addUserToTeam(_id: $_id, userId: $userId) {
      _id
    }
  }
`;

const TeamListContainer: React.FC<ITeamListContainerProps> = ({
  client,
}) => {

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

  return (
    <Query query={GET_ALL_TEAMS}>
    {
      (result: any) => {
        const { loading, error, data } = result;

        if(error) return <h1>Error loading data</h1>;
        if(loading) return <h3>Loading...</h3>

        const teamElements = [];

        for (let team of data.teams) {
          teamElements.push(
            <TeamList 
              team={team}
              onAddUserToTeam={handleAddUserToTeam}
            />
          )
        }
        return teamElements;
      }
    }
    </Query>
  );
};

export default withApollo(TeamListContainer);