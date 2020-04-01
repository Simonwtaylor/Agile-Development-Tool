import { gql } from 'apollo-boost';

export const addTeam = gql`
mutation addTeam($team: team!) {
  addTeam(team: $team) {
    id
  }
}
`;

export const removeTeam = gql`
  mutation removeTeam($id: Float!) {
    removeTeam(id: $id) {
      id
    }
  }
`;

export const removeUserFromTeam = gql`
  mutation removeUserFromTeam($id: Float!, $userId: Float!) {
    removeUserFromTeam(id: $id, userId: $userId) {
      id
    }
  }
`;

export const addUserToTeam = gql`
  mutation addUserToTeam($id: Float!, $userId: Float!) {
    addUserToTeam(id: $id, userId: $userId) {
      id
    }
  }
`;