import { gql } from 'apollo-boost';

export const ADD_TEAM = gql`
mutation addTeam($team: team!) {
  addTeam(team: $team) {
    id
  }
}
`;