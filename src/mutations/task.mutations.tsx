import { gql } from 'apollo-boost';

export const UPDATE_TASK = gql`
  mutation updateTask($t: task!) {
    updateTask(task: $t) {
      id
      title
      description
      completed
      storyPoints
    }
  }
`;

export const COMPLETE_TASK = gql`
  mutation completeTask($id: Float!) {
    completeTask(id: $id) {
      id
      title
      description
      completed
      storyPoints
      completedDate
    }
  }
`;
