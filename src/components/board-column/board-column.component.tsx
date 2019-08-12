import * as React from 'react';
import { ITask } from '../../lib/types/';
import TaskCard from '../task-card/task-card.component';
import './board-column.styles.scss';
import { Card } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

interface IBoardColumnProps extends RouteComponentProps {
  columnId: number;
  columnTitle: string;
  tasks: ITask[];
}
 
const BoardColumn: React.FC<IBoardColumnProps> = 
  ({ 
    columnTitle, 
    tasks,
    history,
  }) => {
  return (
    <div className="col card">
      <div className="card-body card-container">
        <h3>{columnTitle}</h3>
        <CustomButton 
          inverted={true}
          onClick={() => history.push(`/task/new`)}
        >
          <span role="img" aria-label="save">🎫</span> Add New Task
        </CustomButton>
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
 
export default withRouter(BoardColumn);