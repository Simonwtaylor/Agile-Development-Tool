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

export const GET_SPRINT_BOARDS = gql`
  query getBoardsBySprintId($sprintId: Float!) {
    getBoardsBySprintId(sprintId: $sprintId) {
      id
      name
    }
  }
`;