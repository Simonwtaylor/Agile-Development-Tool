import * as React from 'react';
import ITask from '../../lib/types/ITask';
import TaskCard from '../task-card/task-card.component';
import './board-column.styles.scss';
interface IBoardColumnProps {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
}
 
const BoardColumn: React.SFC<IBoardColumnProps> = 
  ({
    columnId, 
    columnTitle, 
    tasks
  }) => {
  return (
    <div className="col card">
      <div className="card-body card-container">
        <h5>{columnTitle}</h5>
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