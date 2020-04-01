import { gql } from 'apollo-boost';

export const addComment = gql`
  mutation addComment($content: String!, $uid: String!, $taskId: Float!) {
    addComment(content: $content, uid: $uid, taskId: $taskId) {
      id
    }
  }
`;