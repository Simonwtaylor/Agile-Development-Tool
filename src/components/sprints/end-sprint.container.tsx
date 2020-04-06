import * as React from 'react';
import { EndSprint } from './';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { completeSprint } from '../../mutations';
import { getAllSprints, incompleteSprints, completeSprints } from '../../queries';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IEndSprintContainerProps extends RouteComponentProps<any> {
  id: number;
}
 
const EndSprintContainer: React.FC<IEndSprintContainerProps> = ({
  id,
  history,
}) => {

  const client = useApolloClient();

  const [completeSprintMutation] = useMutation(completeSprint, {
    client,
    refetchQueries: [
      {
        query: getAllSprints,
      },
      {
        query: incompleteSprints,
      },
      {
        query: completeSprints,
      }
    ]
  });

  const handleOnEndSprint = async () => {
    await completeSprintMutation({
      variables: {
        id: +id,
      }
    });

    history.push('/sprint');
  };
  
  return (
    <EndSprint
      onEndSprintClick={handleOnEndSprint}
    />
  );
}
 
export default withRouter(EndSprintContainer);