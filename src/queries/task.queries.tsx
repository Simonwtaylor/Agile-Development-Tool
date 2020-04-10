import { gql } from 'apollo-boost';

export const getTask = gql`
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
          id
          displayName
          email
          photoURL
          uid
        }
      }
    }
  }
`;

export const getAllTasks = gql`
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