import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import './task-card.styles.scss';

export interface ITaskCardProps {
  id: number;
  title: string;
  storyPoints: number;
  description: string;
  completed: boolean;
  onTaskClick: (id: number) => void;
  user?: any;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  id, 
  title, 
  storyPoints,
  description,  
  completed,
  onTaskClick,
  user,
}) => {

  const handleCardClick = () => {
    onTaskClick(id);
  };

  const getCardColour = () => {
    if (completed) {
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
            className={'user-img'}
            alt='user'
          />)
          }
          <span>{title}</span>
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