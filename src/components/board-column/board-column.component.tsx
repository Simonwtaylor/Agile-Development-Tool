import * as React from 'react';
import { ITask } from '../../lib/types/';
import { TaskCard } from '../task-card';
import './board-column.styles.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Popup, Icon } from 'semantic-ui-react';

export interface IBoardColumnProps extends RouteComponentProps<any> {
  id: number;
  columnTitle: string;
  tasks: ITask[];
  onBoardRemove: (id: number) => void;
}
 
const BoardColumn: React.FC<IBoardColumnProps> = ({ 
  columnTitle, 
  id,
  tasks,
  history,
  onBoardRemove,
}) => {

  const handleTaskClick = (id: number) => {
    if (history) {
      history.push(`/task/${id}`);
    }
  };

  const handleAddClick = () => {
    if (history) {
      history.push(`/task/new`);
    }
  };

  const handleBoardRemove = () => {
    onBoardRemove(id);
  };

  return (
    <div className="col card">
      <div className="card-body card-container">
        <h4>{columnTitle}</h4>
        <Popup
          content={`Add task to ${columnTitle}`}
          key={`boardaddtask`}
          trigger={
            <Icon
              color={'green'}
              name={'plus circle'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={handleAddClick}
            />
          }
        />
        <Popup
          content={`Change settings for ${columnTitle}`}
          key={`boardsettings`}
          trigger={
            <Icon
              color={'blue'}
              name={'settings'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={() => console.log('settings')}
            />
          }
        />
        <Popup
          content={`Delete ${columnTitle}`}
          key={`boarddelete`}
          trigger={
            <Icon
              color={'red'}
              name={'trash'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={handleBoardRemove}
            />
          }
        />
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