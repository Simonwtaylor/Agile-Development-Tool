import { gql } from 'apollo-boost';

export const GET_COMMENTS_BY_TASK = gql`
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