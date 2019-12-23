import * as React from 'react';
import { Backlog } from '../backlog';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_ALL_TASKS } from '../../queries';

export interface BacklogContainerProps {
  
}
 
const BacklogContainer: React.FC<BacklogContainerProps> = () => {

  const client = useApolloClient();

  const { loading, error, data } = useQuery(GET_ALL_TASKS, { client }, );

  if(error) return <h1>Error loading boards</h1>;
  if(loading) return <h3>Loading...</h3>;

  return (
    <Backlog
      tasks={data.tasks}
    />
  );
}
 
export default BacklogContainer;