import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Boards from './boards.component';

export interface IBoardsContainerProps {
  
}
 
const BoardsContainer: React.FC<IBoardsContainerProps> = () => {

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
        }
      }
    }
  `;
  
  return (
    <Query query={GET_ALL_BOARDS}>
    {
      (result: any) => {
        const { loading, error, data } = result;

        if(error) return <h1>Error loading data</h1>;
        if(loading) return <h3>Loading...</h3>

        return (
          <Boards boards={data.boards} />
        )
      }
    }
    </Query>  
  );
}
 
export default BoardsContainer;