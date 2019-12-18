import { gql } from 'apollo-boost';

export const GET_TASK = gql`
  query getTask($id: Float!){
    task(id: $id) {
      id
      title
      description
      completed
      storyPoints
      user {
        id
        displayName
        email
        photoURL
        uid
      }
      board {
        id
        name
      }
    }
  }
`;