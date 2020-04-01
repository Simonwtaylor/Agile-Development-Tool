import { gql } from 'apollo-boost';

export const addBoard = gql`
  mutation addBoard($b: addBoard!) {
    addBoard(addBoard: $b) {
      name
    }
  }
`;

export const removeBoard = gql`
  mutation removeBoard($id: Float!) {
    removeBoard(id: $id) {
      name
    }
  }
`;

export const addBoardForSprint = gql`
  mutation addNewBoardToSprint($b: addBoard!, $id: Float!) {
    addNewBoardToSprint(addBoard: $b, id: $id) {
      name
    }
  }
`;
