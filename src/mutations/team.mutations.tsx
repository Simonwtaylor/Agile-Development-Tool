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