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
      comments {
        id
        content
        datePosted
        user {
          displayName
          photoURL
        }
      }
    }
  }
`;

export const GET_ALL_TASKS = gql`
  query {
    tasks {
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