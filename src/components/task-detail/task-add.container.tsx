import * as React from 'react';
import { gql } from 'apollo-boost';
import TaskDetail from './task-detail.component';
import { withApollo, compose } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

export interface ITaskAddContainerProps {
  client?: any;
  history?: any;
}

const ADD_TASK = gql`
  mutation addTask($t: addTask!) {
    addTask(addTask: $t) {
      title
      description
      completed
      storyPoints
      userId
      boardId
    }
  }
`;
 
const TaskAddContainer: React.FC<ITaskAddContainerProps> = ({
  client,
  history,
}) => {

  // const client = use
  const [addTask, { data: result }] = useMutation(ADD_TASK, {
    client
  });

  const handleTaskSave = (task: ITask) => {
    task.completed = false;
    addTask({ variables: {
      t: {...task}
      }, 
      fetchPolicy: 'cache-and-network'
    });

    history.push('/');
  };

  return (
    <TaskDetail 
      onTaskSave={handleTaskSave}
      taskDetail={{}}
      buttonText={'Add Task'}
    />
  );
}
 
export default compose(
  withRouter, 
  withApollo
)(TaskAddContainer);