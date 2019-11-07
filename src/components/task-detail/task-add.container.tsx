import * as React from 'react';
import { gql } from 'apollo-boost';
import { TaskDetail } from './';
import { withApollo, compose } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { GET_ALL_BOARDS } from '../boards';

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

  const [addTask] = useMutation(ADD_TASK, {
    client,
  });

  const handleTaskSave = (task: ITask) => {
    task.completed = false;
    addTask({ 
      variables: {
        t: {...task},
      },
      refetchQueries: [
        {
          query: GET_ALL_BOARDS
        }
      ]
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
};

export default compose(
  withRouter, 
  withApollo,
)(TaskAddContainer);