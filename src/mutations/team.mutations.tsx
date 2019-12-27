import { gql } from 'apollo-boost';

export const ADD_TEAM = gql`
mutation addTeam($team: team!) {
  addTeam(team: $team) {
    id
  }
}
`;

export const REMOVE_TEAM = gql`
  mutation removeTeam($id: Float!) {
    removeTeam(id: $id) {
      id
    }
  }
`;

export const REMOVE_USER_FROM_TEAM = gql`
  mutation removeUserFromTeam($id: Float!, $userId: Float!) {
    removeUserFromTeam(id: $id, userId: $userId) {
      id
    }
  }
`;