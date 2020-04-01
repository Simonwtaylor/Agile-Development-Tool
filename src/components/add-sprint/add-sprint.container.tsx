import * as React from 'react';
import { AddSprint } from '.';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { getAllSprints } from '../../queries';
import { addSprint } from '../../mutations/sprint.mutations';

export interface IAddSprintContainerProps {
  
}
 
const AddSprintContainer: React.FC<IAddSprintContainerProps> = () => {

  const client = useApolloClient();
  
  const [addSprintMutation] = useMutation(addSprint, {
    client,
    refetchQueries: [
      {
        query: getAllSprints,
      }
    ]
  });

  const handleAddSprint = (sprint: any) => {
    addSprintMutation({
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