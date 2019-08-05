import * as React from 'react';
import { useQuery }  from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task-detail.component';
import { Query } from 'react-apollo';

export interface ITaskDetailContainerProps {
  match?: any;
}
 
const TaskDetailContainer: React.FC<ITaskDetailContainerProps> = ({
  match
}) => {
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

  return (
    <Query query={GET_TASK} variables={{ id: match.params.id}}>
    {
      (result: any) => {
        const { loading, error, data } = result;

        if(error) return <h1>Error loading data</h1>;
        if(loading) return <h3>Loading...</h3>

        return (
          <TaskDetail 
            task={data.task}
          />
        )
      }
    }
    </Query>
  );
}
 
export default withRouter(TaskDetailContainer);