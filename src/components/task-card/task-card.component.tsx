import * as React from 'react';
import { Card } from 'semantic-ui-react';

interface ITaskCardProps {
  id: string, 
  title: string,
  storyPoints: number, 
  assignedColumn: number, 
  assignedUser: any
}
 
const TaskCard: React.FC<ITaskCardProps> = 
  ({
    id, 
    title, 
    storyPoints, 
    assignedColumn, 
    assignedUser
  }) => {

  return (
    <Card className="task-card">
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Meta>
          {storyPoints}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
 
export default TaskCard;