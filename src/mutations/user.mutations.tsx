import { gql } from 'apollo-boost';

export const SET_CURRENT_TASK = gql`
  mutation setCurrentTask($userId: Float!, $taskId: Float!) {
    setCurrentTask(userId: $userId, taskId: $taskId) {
      id
    }
  }
`