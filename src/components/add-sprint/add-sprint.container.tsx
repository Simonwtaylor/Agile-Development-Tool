import * as React from 'react';
import { AddSprint } from '.';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { GET_ALL_SPRINTS } from '../../queries';
import { ADD_SPRINT } from '../../mutations/sprint.mutations';

export interface IAddSprintContainerProps {
  
}
 
const AddSprintContainer: React.FC<IAddSprintContainerProps> = () => {

  const client = useApolloClient();
  
  const [addSprint] = useMutation(ADD_SPRINT, {
    client,
    refetchQueries: [
      {
        query: GET_ALL_SPRINTS,
      }
    ]
  });

  const handleAddSprint = (sprint: any) => {
    addSprint({
      variables: {
        sprint: { 
          ...sprint,
          completed: false,
        },
      }
    }); 
  };

  return (
    <AddSprint
      onAddSprint={handleAddSprint}
    />
  );
}
 
export default AddSprintContainer;