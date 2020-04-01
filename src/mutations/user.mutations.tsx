import { gql } from 'apollo-boost';

export const setCurrentTask = gql`
  mutation setCurrentTask($userId: Float!, $taskId: Float!) {
    setCurrentTask(userId: $userId, taskId: $taskId) {
      id
    }
  }
`