import * as React from 'react';
import { ITask } from '../../lib/types';
import { TaskCard } from '../task-card';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IBacklogProps extends RouteComponentProps {
  tasks: ITask[];
}
 
const Backlog: React.FC<IBacklogProps> = ({
  tasks,
  history,
}) => {


  const handleTaskClick = (id: number) => {
    history.push(`/task/${id}`);
  };

  return (
    <>
    {
      tasks.map((task: ITask) => {
        return (
          <TaskCard 
            onTaskClick={handleTaskClick}
            key={task.id}
            {...task}
          />)
      })
    }
    </>
  );
}
 
export default withRouter(Backlog);