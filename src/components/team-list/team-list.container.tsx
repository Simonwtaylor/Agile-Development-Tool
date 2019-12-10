import * as React from 'react';
import { TeamList } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_ALL_TEAMS } from '../../queries';

export interface ITeamListContainerProps { }

const TeamListContainer: React.FC<ITeamListContainerProps> = () => {

  const client = useApolloClient();

  const { loading, error, data } = useQuery(GET_ALL_TEAMS, { client });

  if(error) return <h1>Error loading teams</h1>;
  if(loading) return <h3>Loading teams...</h3>;

  return (
    <TeamList
      teams={data.teams}
    />
  );
};

export default TeamListContainer;