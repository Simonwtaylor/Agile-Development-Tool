import * as React from 'react';
import { Backlog } from '../backlog';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { getAllTasks } from '../../queries';

export interface BacklogContainerProps {
  
}
 
const BacklogContainer: React.FC<BacklogContainerProps> = () => {

  const client = useApolloClient();

  const { loading, error, data } = useQuery(getAllTasks, { client }, );

  if(error) return <h1>Error loading tasks</h1>;
  if(loading) return <h3>Loading...</h3>;

  return (
    <Backlog
      tasks={data.tasks}
    />
  );
}
 
export default BacklogContainer;