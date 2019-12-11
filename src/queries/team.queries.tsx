import { gql } from 'apollo-boost';

export const ADD_USER_TO_TEAM = gql`
  mutation addUserToTeam($id: Float!, $userId: Float!) {
    addUserToTeam(id: $id, userId: $userId) {
      id
    }
  }
`;

export const GET_ALL_TEAMS = gql`
  query {
    teams {
      id
      name
      users {
        id
        photoURL
        displayName
        currentTask {
          id
          title
          description
        }
      }
    }
  }
`;