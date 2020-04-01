import { gql } from 'apollo-boost';

export const getAllUsers = gql`
{
    users {
        id
        displayName
        email
        photoURL
        uid 
    }
}
`;