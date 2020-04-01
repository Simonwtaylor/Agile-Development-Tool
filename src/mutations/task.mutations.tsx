import { gql } from 'apollo-boost';

export const addTask = gql`
  mutation addTask($t: addTask!) {
    addTask(addTask: $t) {
      title
      description
      completed
      storyPoints
    }
  }
`;

export const updateTask = gql`
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

export const completeTask = gql`
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

export const removeTask = gql`
  mutation removeTask($id: Float!) {
    removeTask(id: $id) {
      id
    }
  }
`;
