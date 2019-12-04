import * as React from 'react';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import { 
  TaskDetail,
  TaskDetailMode,
} from './';
import { ITask } from '../../lib/types';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import { GET_ALL_BOARDS } from '../boards';
import { CustomButton } from '../custom-button';

export interface ITaskDetailContainerProps {
  match?: any;
  history?: any;
}

export const GET_TASK = gql`
  query getTask($id: Float!){
    task(id: $id) {
      id
      title
      description
      completed
      storyPoints
      user {
        id
        displayName
        email
        photoURL
        uid
      }
      board {
        id
        name
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($t: task!) {
    updateTask(task: $t) {
      id
      title
      description
      completed
      storyPoints
    }
  }
`;

export const COMPLETE_TASK = gql`
  mutation completeTask($id: Float!) {
    completeTask(id: $id) {
      id
      title
      description
      completed
      storyPoints
      completedDate
    }
  }
`;
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match, 
  history, 
}) => {

  const client = useApolloClient();

  const [completeTask] = useMutation(COMPLETE_TASK, {
    client,
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    client,
    refetchQueries: [
      {
        query: GET_ALL_BOARDS,
      }
    ]
  });

  const handleBoardNavigation = () => {
    history.push('/board');
  };

  const handleTaskComplete = async (id: number) => {
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
      id: +match.params.id,
    },
    client,
  });

  if(error) return (
    <div
      style={{
        width: '200px',
        margin: '0px auto'
      }}
    >
      <h4>Error loading task <span role="img" aria-label="locks">😞</span></h4>
      <CustomButton
        color={'blue'}
        onClick={handleBoardNavigation}
      >
        Back to boards
      </CustomButton>
    </div>
  );

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
 
export default withRouter(TaskDetailContainer);