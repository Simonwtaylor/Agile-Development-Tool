import * as React from 'react';
import { gql } from 'apollo-boost';
import { TaskDetail } from './';
import { ITask } from '../../lib/types';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { GET_ALL_BOARDS } from '../../queries/';

export interface ITaskAddContainerProps extends RouteComponentProps {

}

export const ADD_TASK = gql`
  mutation addTask($t: addTask!) {
    addTask(addTask: $t) {
      title
      description
      completed
      storyPoints
    }
  }
`;
 
const TaskAddContainer: React.FC<ITaskAddContainerProps> = ({
  history,
}) => {

  const client = useApolloClient();

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

export default withRouter(TaskAddContainer);