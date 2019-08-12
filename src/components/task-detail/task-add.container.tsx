import * as React from 'react';
import { gql } from 'apollo-boost';
import TaskDetail from './task-detail.component';
import { withApollo } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation } from '@apollo/react-hooks';

export interface ITaskAddContainerProps {
  client?: any;
}

const ADD_TASK = gql`
  mutation addTask($t: task!) {
    updateTask(task: $t) {
      title
      description
      storyPoints
      assignedUser
      assignedColumn
    }
  }
`;
 
const TaskAddContainer: React.FC<ITaskAddContainerProps> = ({
  client
}) => {

  // const client = use
  const [addTask, { data: result }] = useMutation(ADD_TASK, {
    client
  });

  const handleTaskSave = (task: ITask) => {
    addTask({ variables: {
      t: {...task}
      }
    });
  };

  return (
    <TaskDetail 
      onTaskSave={handleTaskSave}
      taskDetail={{}}
    />
  );
}
 
export default withApollo(TaskAddContainer);