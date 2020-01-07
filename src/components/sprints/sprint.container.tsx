import * as React from 'react';
import { Boards } from '../boards';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { ADD_BOARD, REMOVE_BOARD } from '../../mutations';
import { GET_BOARDS_FOR_SPRINT } from '../../queries';
import { connect } from 'react-redux';
import { setCurrentSprint } from '../../redux/sprint/sprint.action';

export interface ISprintContainerProps {
  sprintId: number;
  setCurrentSprint?: (sprint: any) => void;
}

const SprintContainer: React.FC<ISprintContainerProps> = ({
  sprintId,
  setCurrentSprint,
}) => {

  const client = useApolloClient();

  const [addBoard] = useMutation(ADD_BOARD, {
    client,
    refetchQueries: [
      {
        query: GET_BOARDS_FOR_SPRINT,
      }
    ]
  });

  const [removeBoard] = useMutation(REMOVE_BOARD, {
    client,
    refetchQueries: [
      {
        query: GET_BOARDS_FOR_SPRINT,
      }
    ]
  });

  const handleTaskSave = (name: string) => {
    addBoard({
      variables: {
        b: {
          name,
        }
      }
    });
  };

  const handleBoardRemove = (id: number) => {
    removeBoard({
      variables: {
        id: +id,
      }
    });
  };

  const { loading, error, data } = useQuery(GET_BOARDS_FOR_SPRINT, {
    client,
    variables: {
      id: +sprintId,
    }
  });

  if(error) return <h1>Error loading sprint</h1>;
  if(loading) return <h3>Loading...</h3>;

  if (setCurrentSprint) {
    setCurrentSprint(data.sprint);
  }

  return (
    <>
      <Boards
        boards={data.sprint.boards}
        onAddNewBoard={handleTaskSave}
        onRemoveBoard={handleBoardRemove}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentSprint: (sprint: any|null) => dispatch(setCurrentSprint(sprint)),
});

export default connect(null, mapDispatchToProps)(SprintContainer);