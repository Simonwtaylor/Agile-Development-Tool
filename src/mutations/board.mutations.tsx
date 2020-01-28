import { gql } from 'apollo-boost';

export const ADD_BOARD = gql`
  mutation addBoard($b: addBoard!) {
    addBoard(addBoard: $b) {
      name
    }
  }
`;

export const REMOVE_BOARD = gql`
  mutation removeBoard($id: Float!) {
    removeBoard(id: $id) {
      name
    }
  }
`;

export const ADD_BOARD_FOR_SPRINT = gql`
  mutation addNewBoardToSprint($b: addBoard!, $id: Float!) {
    addNewBoardToSprint(addBoard: $b, id: $id) {
      name
    }
  }
`;
