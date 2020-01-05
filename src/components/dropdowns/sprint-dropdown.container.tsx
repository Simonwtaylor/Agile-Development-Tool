import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_ALL_SPRINTS } from '../../queries';
import { ISprint } from '../../lib/types';

export interface ISprintDropdownContainerProps {
  onSelectSprint: any;
  selectedSprint?: any;
  name: string;
}

const SprintDropdownContainer: React.FC<ISprintDropdownContainerProps> = ({
  onSelectSprint,
  selectedSprint,
  name
}) => {

  const client = useApolloClient();

  const { error, loading, data } = useQuery(GET_ALL_SPRINTS, { client });

  if(error) return <h1>Error loading sprints</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: any[] = [];

  data.sprints.map((sprint: ISprint) => {
    return options.push(
      {
        key: sprint.id, 
        value: sprint.id, 
        text: sprint.name
      }
    );
  });

  return (
    <CustomDropdown 
      items={options}
      onSelectItem={onSelectSprint}
      selectedItem={selectedSprint}
      name={name}
    />
  );
};
 
export default SprintDropdownContainer;