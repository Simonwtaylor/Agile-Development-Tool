import * as React from 'react';
import { ITask } from '../../lib/types/';
import { TaskCard } from '../task-card';
import './board-column.styles.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { CustomButton } from '../custom-button/';

export interface IBoardColumnProps extends RouteComponentProps<any> {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
}
 
const BoardColumn: React.FC<IBoardColumnProps> = ({ 
  columnTitle, 
  tasks,
  history,
}) => {

  const handleTaskClick = (id: string) => {
    if (history) {
      history.push(`/task/${id}`);
    }
  };

  const handleAddClick = () => {
    if (history) {
      history.push(`/task/new`);
    }
  };

  return (
    <div className="col card">
      <div className="card-body card-container">
        <h3>{columnTitle}</h3>
        <CustomButton 
          inverted={true}
          color={'green'}
          onClick={handleAddClick}
        >
          <span role="img" aria-label="save">➕</span> Add New Task
        </CustomButton>
        {
          tasks.map((task, index) => {
            return(
              <TaskCard 
                onTaskClick={handleTaskClick}
                key={`taskcard${index}`}
                {...task}
              />
            ) 
          })
        }
      </div>
    </div> 
  );
}

export default withRouter(BoardColumn);