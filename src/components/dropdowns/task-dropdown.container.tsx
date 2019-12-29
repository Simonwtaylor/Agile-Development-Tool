import * as React from 'react';
import { CustomDropdown } from './';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_ALL_TASKS } from '../../queries';
import { ITask } from '../../lib/types';

export interface ITaskDropdownContainerProps {
  onSelectTask: any;
  selectedTask?: any;
  name: string;
}

const TaskDropdownContainer: React.FC<ITaskDropdownContainerProps> = ({
  onSelectTask,
  selectedTask,
  name
}) => {

  const client = useApolloClient();

  const { error, loading, data } = useQuery(GET_ALL_TASKS, { client });

  if(error) return <h1>Error loading tasks</h1>;
  if(loading) return <h3>Loading...</h3>;

  const options: any[] = [];

  data.tasks.map((task: ITask) => {
    return options.push(
      {
        key: task.id, 
        value: task.id, 
        text: task.title
      }
    );
  });

  return (
    <CustomDropdown 
      items={options}
      onSelectItem={onSelectTask}
      selectedItem={selectedTask}
      name={name}
    />
  );
};
 
export default TaskDropdownContainer;