import * as React from 'react';
import ITask from '../../lib/types/ITask';
import TaskCard from '../task-card/task-card.component';
import './board-column.styles.scss';
interface IBoardColumnProps {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
  color: string;
}
 
const BoardColumn: React.FC<IBoardColumnProps> = 
  ({
    columnId, 
    columnTitle, 
    tasks,
    color
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