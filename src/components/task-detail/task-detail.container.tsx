import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { 
  TaskDetail,
  TaskDetailMode,
} from './';
import { ITask } from '../../lib/types';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import { getAllTasks, getAllSprints, getTask } from '../../queries/';
import { CustomButton } from '../custom-button';
import { completeTask, updateTask, removeTask } from '../../mutations';

export interface ITaskDetailContainerProps {
  match?: any;
  history?: any;
}

const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match, 
  history, 
}) => {

  const client = useApolloClient();

  const [completeTaskMutation] = useMutation(completeTask, {
    client,
  });

  const [updateTaskMutation] = useMutation(updateTask, {
    client,
    refetchQueries: [
      {
        query: getAllSprints,
      }
    ]
  });

  const [removeTaskMutation] = useMutation(removeTask, {
    client,
    refetchQueries: [
      {
        query: getAllSprints,
      },
      {
        query: getAllTasks,
      }
    ]
  });

  const handleBoardNavigation = () => {
    history.push('/sprint');
  };

  const handleTaskComplete = async (id: number) => {
    await completeTaskMutation({
      variables: {
        id: +id,
      }
    });

    history.push('/sprint');
  };

  const handleTaskSave = async (task: ITask) => {
    await updateTaskMutation({
      variables: {
        t: {...task},
      }
    });

    history.push('/sprint');
  };

  const handleTaskDelete = async (id: number) => {
    await removeTaskMutation({
      variables: {
        id: +id,
      }
    });

    history.push('/sprint');
  };

  const { loading, error, data } = useQuery(getTask, {
    variables: { 
      id: +match.params.id,
    },
    client,
  });

  if (error) return (
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

  if (loading) return <Loader />;

  return (
    <TaskDetail
      onTaskSave={handleTaskSave}
      taskDetail={data.task}
      buttonText={'Update Task'}
      mode={TaskDetailMode.EDIT}
      onTaskComplete={handleTaskComplete}
      onTaskDelete={handleTaskDelete}
    />
  );
}
 
export default withRouter(TaskDetailContainer);