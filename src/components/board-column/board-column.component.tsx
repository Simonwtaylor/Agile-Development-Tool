import * as React from 'react';
import { ITask } from '../../lib/types/';
import TaskCard from '../task-card/task-card.component';
import './board-column.styles.scss';

interface IBoardColumnProps {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
  color: string;
  history?: any;
}
 
const BoardColumn: React.FC<IBoardColumnProps> = 
  ({
    columnId, 
    columnTitle, 
    tasks,
    color,
    history
  }) => {
  return (
    <div className="col card">
      <div className="card-body card-container">
        <h3>{columnTitle}</h3>
        {
          tasks.map(task => {
            return(
              <TaskCard 
                {...task}
              />
            )
          })
        }
      </div>
    </div> 
  );
}
 
export default BoardColumn;