import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import './task-card.styles.scss';

export interface ITaskCardProps {
  _id: string;
  title: string;
  storyPoints: number;
  description: string;
  completed: boolean;
  onTaskClick: (id: string) => void;
  user?: any;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  _id, 
  title, 
  storyPoints,
  description,  
  completed,
  onTaskClick,
  user,
}) => {

  const handleCardClick = () => {
    onTaskClick(_id);
  };

  const getCardColour = () => {
    if(completed) {
      return 'green'
    }
    return undefined;
  };

  return (
    <Card 
      className="task-card" 
      onClick={handleCardClick}
      color={getCardColour()}
    >
      <Card.Content>
        <Card.Header>
          {((user) && (user.photoURL) && <img 
            src={user.photoURL}
            width={'25'}
            height={'25'}
            alt='user'
            style={{
              float: 'left', 
              borderRadius: '50%',
            }}
          />)
          }
          {title}
          <Label
            circular
            color={'red'}
            key={'red'}
          >
            {storyPoints}
          </Label>
        </Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TaskCard;