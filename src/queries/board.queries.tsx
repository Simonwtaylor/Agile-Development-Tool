import { gql } from 'apollo-boost';

export const GET_ALL_BOARDS = gql`
  {
    boards {
      id
      name 
      tasks {
        id
        title
        description
        completed
        storyPoints
        user {
          id
          photoURL
          displayName
        }
        board {
          id
        }
      }
    }
  }
`;
