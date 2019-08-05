import * as React from 'react';
import { useQuery }  from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task-detail.component';

export interface ITaskDetailContainerProps {
  match?: any;
}
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match
}) => {
  const GET_TASK = gql`
    task(_id: $id) {
      _id
      title
      description
      storyPoints
      assignedUser
      assignedColumn
    }
  `;

  const { loading, error, data } = useQuery(GET_TASK, { variables: { id: match.params.id } });

  let content;
  if (loading) {
    content = <h3>Fetching Task...</h3>;
  } else if (error) {
    content = <h1>Error loading task 😠</h1>;
  } else {
    content = (
      <TaskDetail task={data.task} />
    );
  }
  return (content);
}
 
export default withRouter(TaskDetailContainer);