import * as React from 'react';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import { 
  TaskDetail,
  TaskDetailMode,
} from './';
import {  withApollo, compose } from 'react-apollo';
import { ITask } from '../../lib/types';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';

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

const COMPLETE_TASK = gql`
  mutation completeTask($id: String!) {
    completeTask(_id: $id) {
      _id
      title
      description
      completed
      storyPoints
      userId
      boardId
      completedDate
    }
  }
`;
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match, 
  client,
  history, 
}) => {

  const [completeTask] = useMutation(COMPLETE_TASK, {
    client,
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    client,
  });

  const handleTaskComplete = async (id: string) => {
    await completeTask({
      variables: {
        id,
      }
    });

    history.push('/board');
  };

  const handleTaskSave = async (task: ITask) => {
    await updateTask({
      variables: {
        t: {...task},
      }
    });

    history.push('/board');
  };

  const { loading, error, data } = useQuery(GET_TASK, {
    variables: { 
      id: match.params.id,
    },
    client,
  });

  if(error) return <h1>Error loading task 😞</h1>;
  if(loading) return <Loader />;

  return (
    <TaskDetail
      onTaskSave={handleTaskSave}
      taskDetail={data.task}
      buttonText={'Update Task'}
      mode={TaskDetailMode.EDIT}
      onTaskComplete={handleTaskComplete}
    />
  );
}
 
export default compose(
  withRouter, 
  withApollo,
)(TaskDetailContainer);