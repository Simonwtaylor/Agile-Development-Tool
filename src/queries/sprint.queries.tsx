import { gql } from 'apollo-boost';

export const getAllSprints = gql`{
  sprints {
    id
    name
    boards {
      id
      name
    }
  }
}`;

export const getSprintById = gql`
  query sprint($id: Float!) {
    sprint(id: $id) {
      id
      name
      startDate
      endDate
      completed
      boards {
        id
        name 
        tasks {
          id
          title
          description
          completed
          storyPoints
          user {
            id
            photoURL
            displayName
          }
          board {
            id
          }
        }
      }
    }
  }
`;

export const incompleteSprints = gql`{
  incompleteSprints {
    id
    name
    boards {
      id
      name
    }
  }
}`;

export const completeSprints = gql`{
  completeSprints {
    id
    name
    boards {
      id
      name
    }
  }
}`;