import { gql } from 'apollo-boost';

export const ADD_SPRINT = gql`
  mutation addSprint($sprint: addSprint!) {
    addSprint(addSprint: $sprint) {
      id
    }
  }
`;

export const ADD_BOARD_TO_SPRINT = gql`
  mutation addBoardToSprint($id: Float!, $boardId: Float!) {
    addBoardToSprint(id: $id, boardId: $boardId) {
      id
    }
  }
`;