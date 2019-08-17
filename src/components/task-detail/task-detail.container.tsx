import * as React from 'react';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task-detail.component';
import {  withApollo, compose } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import { TaskDetailMode } from './task-detail.enum';

export interface ITaskDetailContainerProps {
  match?: any;
  client?: any;
  history?: any;
}

const GET_TASK = gql`
  query getTask($id: String!){
    task(_id: $id) {
      _id
      title
      description
      completed
      storyPoints
      userId
      boardId
    }
  }
`;

const UPDATE_TASK = gql`
  mutation updateTask($t: task!) {
    updateTask(task: $t) {
      _id
      title
      description
      completed
      storyPoints
      userId
      boardId
    }
  }
`;
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match, 
  client,
  history, 
}) => {

  const [updateTask, { data: result }] = useMutation(UPDATE_TASK, {
    client
  });

  const handleTaskSave = (task: ITask) => {
    updateTask({ variables: {
      t: {...task}
      }
    });

    if(result) { 
      history.push('/');
    }
  };

  const { loading, error, data } = useQuery(GET_TASK, {
    variables: { 
      id: match.params.id
    },
    client
  });

  if(error) return <h1>Error loading data</h1>;
  if(loading) return <Loader />;

  return (
    <TaskDetail 
      onTaskSave={handleTaskSave}
      taskDetail={data.task}
      buttonText={'Update Task'}
      mode={TaskDetailMode.EDIT}
      onTaskComplete={(_id: string) => console.log(_id)}
    />
  );
}
 
export default compose(
  withRouter, 
  withApollo
)(TaskDetailContainer);