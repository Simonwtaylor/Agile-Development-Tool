import { gql } from 'apollo-boost';

export const getAllBoards = gql`
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

export const getBoardsBySprintId = gql`
  query getBoardsBySprintId($sprintId: Float!) {
    getBoardsBySprintId(sprintId: $sprintId) {
      id
      name
    }
  }
`;