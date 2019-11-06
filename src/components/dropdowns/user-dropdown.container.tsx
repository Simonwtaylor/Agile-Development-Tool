import * as React from 'react';
import { CustomDropdown } from './';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export interface IUserDropdownContainerProps {
  onSelectUser: any;
  selectedUser?: any;
  name: string;
}
 
const UserDropdownContainer: React.FC<IUserDropdownContainerProps> = ({
  onSelectUser,
  selectedUser,
  name
}) => {

  const GET_ALL_USERS = gql`
    {
      users {
        _id
        displayName
        email
        photoURL
        uid 
      }
    }
  `;

  return (
    <Query query={GET_ALL_USERS}>
    {
      (result: any) => {
        const { error, loading, data } = result;
        if(error) return <h1>Error loading users</h1>;
        if(loading) return <h3>Loading...</h3>;

        const options: any[] = [];

        data.users.map((user: any) => {
          return options.push(
            {
              key: user._id, 
              value: user._id, 
              text: user.displayName,
              image: user.photoURL
            }
          );
        });

        return (
          <CustomDropdown 
            items={options}
            onSelectItem={onSelectUser}
            selectedItem={selectedUser}
            name={name}
          />
        )
      }
    }
    </Query>
  );
};
 
export default UserDropdownContainer;