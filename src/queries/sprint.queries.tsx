import { gql } from 'apollo-boost';

export const GET_ALL_SPRINTS = gql`{
  sprints {
    id
    name
    boards {
      id
      name
    }
  }
}`;

export const GET_BOARDS_FOR_SPRINT = gql`
  query sprint($id: Float!) {
    sprint(id: $id) {
      id
      name
      startDate
      endDate
      completed
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
  }
`;