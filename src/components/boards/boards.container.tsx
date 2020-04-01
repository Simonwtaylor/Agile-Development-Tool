import * as React from 'react';
import { Boards } from './';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { addBoard, removeBoard } from '../../mutations';
import { getBoardsBySprintId } from '../../queries';

export interface IBoardsContainerProps {
  sprintId: number;
}

const BoardsContainer: React.FC<IBoardsContainerProps> = ({
  sprintId,
}) => {

  const client = useApolloClient();

  const [addBoardMutation] = useMutation(addBoard, {
    client,
    refetchQueries: [
      {
        query: getBoardsBySprintId,
        variables: {
          sprintId: +sprintId,
        }
      }
    ]
  });

  const [removeBoardMutation] = useMutation(removeBoard, {
    client,
    refetchQueries: [
      {
        query: getBoardsBySprintId,
        variables: {
          sprintId: +sprintId,
        }
      }
    ]
  });

  const handleTaskSave = (name: string) => {
    addBoardMutation({
      variables: {
        b: {
          name,
        }
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

  const { loading, error, data } = useQuery(getBoardsBySprintId, {
    client,
    variables: {
      sprintId: +sprintId,
    }
  });

  if(error) return <h1>Error loading boards</h1>;
  if(loading) return <h3>Loading...</h3>;

  return (
    <Boards 
      boards={data.sprint.boards}
      onAddNewBoard={handleTaskSave}
      onRemoveBoard={handleBoardRemove}
    />
  );
}

export default BoardsContainer;