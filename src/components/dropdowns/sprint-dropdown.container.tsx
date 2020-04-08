import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { incompleteSprints } from '../../queries';
import { ISprint } from '../../lib/types';
import { DropdownItemProps } from 'semantic-ui-react';

export interface ISprintDropdownContainerProps {
  onSelectSprint: any;
  selectedSprint?: any;
  name: string;
  placeholder?: string;
}

const SprintDropdownContainer: React.FC<ISprintDropdownContainerProps> = ({
  onSelectSprint,
  selectedSprint,
  name,
  placeholder,
}) => {

  const client = useApolloClient();

  const { error, loading, data } = useQuery(incompleteSprints, { client });

  if(error) return <h1>Error loading sprints</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: DropdownItemProps[] = [];

  data.incompleteSprints.map((sprint: ISprint) => {
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
      placeholder={placeholder}
    />
  );
};
 
export default SprintDropdownContainer;