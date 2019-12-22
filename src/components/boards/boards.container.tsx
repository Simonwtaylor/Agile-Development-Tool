import * as React from 'react';
import { Boards } from './';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { ADD_BOARD, REMOVE_BOARD } from '../../mutations';
import { GET_ALL_BOARDS } from '../../queries';

export interface IBoardsContainerProps {
  history?: any;
}

const BoardsContainer: React.FC<IBoardsContainerProps> = () => {

  const client = useApolloClient();

  const [addBoard] = useMutation(ADD_BOARD, {
    client,
    refetchQueries: [
      {
        query: GET_ALL_BOARDS,
      }
    ]
  });

  const [removeBoard] = useMutation(REMOVE_BOARD, {
    client,
    refetchQueries: [
      {
        query: GET_ALL_BOARDS,
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

  const { loading, error, data } = useQuery(GET_ALL_BOARDS, { client });

  if(error) return <h1>Error loading boards</h1>;
  if(loading) return <h3>Loading...</h3>;

  return (
    <Boards 
      boards={data.boards}
      onAddNewBoard={handleTaskSave}
      onRemoveBoard={handleBoardRemove}
    />
  );
}

export default BoardsContainer;