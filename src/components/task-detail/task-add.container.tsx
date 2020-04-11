import * as React from 'react';
import { TaskAdd } from './';
import { ITask } from '../../lib/types';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getAllSprints } from '../../queries/';
import { addTask } from '../../mutations';

export interface ITaskAddContainerProps extends RouteComponentProps {

}

const TaskAddContainer: React.FC<ITaskAddContainerProps> = ({
  history,
}) => {

  const client = useApolloClient();

  const [addTaskMutation] = useMutation(addTask, {
    client,
  });

  const handleTaskSave = (task: ITask) => {
    task.completed = false;
    addTaskMutation({ 
      variables: {
        t: {...task},
      },
      refetchQueries: [
        {
          query: getAllSprints,
        }
      ]
    });

    history.push('/');
  };

  return (
    <TaskAdd 
      onTaskSave={handleTaskSave}
    />
  );
};

export default withRouter(TaskAddContainer);