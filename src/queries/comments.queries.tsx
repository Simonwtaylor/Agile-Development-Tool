import { gql } from 'apollo-boost';

export const getCommentsByTaskId = gql`
  query getCommentsByTaskId($taskId: Float!){
    getCommentsByTaskId(taskId: $taskId) {
        id
        content
        datePosted
        user {
            id
            displayName
            photoURL
        }
    }
  }
`;