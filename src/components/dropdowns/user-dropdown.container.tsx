import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { getAllUsers } from '../../queries';

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

  const client = useApolloClient();

  const { error, loading, data } = useQuery(getAllUsers, { client });

  if(error) return <h1>Error loading users</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: any[] = [];

  data.users.map((user: any) => {
    return options.push(
      {
        key: user.id, 
        value: user.id, 
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
  );
};
 
export default UserDropdownContainer;