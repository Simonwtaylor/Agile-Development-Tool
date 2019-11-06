import * as React from 'react';
import { Query, withApollo, compose } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Boards } from './';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

export interface IBoardsContainerProps {
  client?: any;
  history?: any;
}
 
const BoardsContainer: React.FC<IBoardsContainerProps> = ({
  client,
  history,
}) => {

  const GET_ALL_BOARDS = gql`
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

  const ADD_BOARD = gql`
    mutation addBoard($b: addBoard!) {
      addBoard(addBoard: $b) {
        name
      }
    }
  `;

  const [addBoard] = useMutation(ADD_BOARD, {
    client
  });

  const handleTaskSave = (name: string) => {

    addBoard({
      variables: {
        b: {
          name,
        }
      }
    });

    history.push('/');
  };

  return (
    <Query query={GET_ALL_BOARDS}>
    {
      (result: any) => {
        const { loading, error, data } = result;

        if(error) return <h1>Error loading data</h1>;
        if(loading) return <h3>Loading...</h3>

        return (
          <Boards 
            boards={data.boards}
            onAddNewBoard={handleTaskSave}
          />
        )
      }
    }
    </Query>  
  );
}

export default compose(
  withRouter, 
  withApollo
)(BoardsContainer);