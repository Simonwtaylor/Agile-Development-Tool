import * as React from 'react';
import { gql } from 'apollo-boost';
import { Boards } from './';
import { useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';

export interface IBoardsContainerProps {
  history?: any;
}

export const ADD_BOARD = gql`
mutation addBoard($b: addBoard!) {
  addBoard(addBoard: $b) {
    name
  }
}
`;

export const GET_ALL_BOARDS = gql`
{
  boards {
    _id
    name 
    tasks {
      _id
      title
      description
      completed
      storyPoints
      userId
      boardId
      user {
        _id
        photoURL
        displayName
      }
    }
  }
}
`;

const BoardsContainer: React.FC<IBoardsContainerProps> = ({

}) => {

  const client = useApolloClient();

  const [addBoard] = useMutation(ADD_BOARD, {
    client,
    refetchQueries: [GET_ALL_BOARDS]
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

  const { loading, error, data } = useQuery(GET_ALL_BOARDS, { client });

  if(error) return <h1>Error loading boards</h1>;
  if(loading) return <h3>Loading...</h3>;

  return (
    <Boards 
      boards={data.boards}
      onAddNewBoard={handleTaskSave}
    />
  );
}

export default BoardsContainer;