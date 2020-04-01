import { gql } from 'apollo-boost';

export const getAllTeams = gql`
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