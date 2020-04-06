import { gql } from 'apollo-boost';

export const addSprint = gql`
  mutation addSprint($sprint: addSprint!) {
    addSprint(addSprint: $sprint) {
      id
    }
  }
`;

export const addBoardToSprint = gql`
  mutation addBoardToSprint($id: Float!, $boardId: Float!) {
    addBoardToSprint(id: $id, boardId: $boardId) {
      id
    }
  }
`;

export const completeSprint = gql`
  mutation completeSprint($id: Float!) {
    completeSprint(id: $id) {
      id
      name
      startDate
      endDate
      completed
    }
  }
`;