import * as React from 'react';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task-detail.component';
import {  withApollo, compose } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation, useQuery } from '@apollo/react-hooks';

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
      storyPoints
      assignedUser
      assignedColumn
    }
  }
`;

const UPDATE_TASK = gql`
  mutation updateTask($t: task!) {
    updateTask(task: $t) {
      _id
      title
      description
      storyPoints
      assignedUser
      assignedColumn
    }
  }
`;
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match, 
  client,
  history, 
}) => {

  // const client = use
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
  if(loading) return <h3>Loading...</h3>;

  return (
    <TaskDetail 
      onTaskSave={handleTaskSave}
      taskDetail={data.task}
      buttonText={'Update Task'}
    />
  );
}
 
export default compose(
  withRouter, 
  withApollo
)(TaskDetailContainer);