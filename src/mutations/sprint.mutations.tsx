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