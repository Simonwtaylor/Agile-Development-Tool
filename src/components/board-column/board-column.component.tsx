import * as React from 'react';
import { ITask } from '../../lib/types/';
import TaskCard from '../task-card/task-card.component';
import './board-column.styles.scss';

interface IBoardColumnProps {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
  history?: any;
}
 
const BoardColumn: React.FC<IBoardColumnProps> = 
  ({ 
    columnTitle, 
    tasks,
  }) => {
  return (
    <div className="col card">
      <div className="card-body card-container">
        <h3>{columnTitle}</h3>
        {
          tasks.map((task, index) => {
            return(
              <TaskCard 
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
 
export default BoardColumn;