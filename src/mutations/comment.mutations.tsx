import { gql } from 'apollo-boost';

export const ADD_COMMENT = gql`
  mutation addComment($content: String!, $uid: String!, $taskId: Float!) {
    addComment(content: $content, uid: $uid, taskId: $taskId) {
      id
    }
  }
`;