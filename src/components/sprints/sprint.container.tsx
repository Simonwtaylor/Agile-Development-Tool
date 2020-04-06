import * as React from 'react';
import { Boards } from '../boards';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { removeBoard, addBoardForSprint } from '../../mutations';
import { getSprintById } from '../../queries';
import { useDispatch } from 'react-redux';
import { setCurrentSprint } from '../../redux/sprint/sprint.action';

export interface ISprintContainerProps {
  sprintId: number;
}

const SprintContainer: React.FC<ISprintContainerProps> = ({
  sprintId,
}) => {
  const dispatch = useDispatch();

  const client = useApolloClient();

  const [addBoardForSprintMutation] = useMutation(addBoardForSprint, {
    client,
    refetchQueries: [
      {
        query: getSprintById,
        variables: {
          id: +sprintId
        }
      }
    ]
  });

  const [removeBoardMutation] = useMutation(removeBoard, {
    client,
    refetchQueries: [
      {
        query: getSprintById,
        variables: {
          id: +sprintId
        }
      }
    ]
  });

  const handleBoardSave = (name: string) => {
    addBoardForSprintMutation({
      variables: {
        b: {
          name,
        },
        id: sprintId
      }
    });
  };

  const handleBoardRemove = (id: number) => {
    removeBoardMutation({
      variables: {
        id: +id,
      }
    });
  };

  const { loading, error, data } = useQuery(getSprintById, {
    client,
    variables: {
      id: +sprintId,
    }
  });

  if(error) return <h1>Error loading sprint</h1>;
  if(loading) return <h3>Loading...</h3>;

  if (setCurrentSprint) {
    dispatch(setCurrentSprint(data.sprint))
  }

  return (
    <Boards
      boards={data.sprint.boards}
      onAddNewBoard={handleBoardSave}
      onRemoveBoard={handleBoardRemove}
    />
  );
}

export default SprintContainer;