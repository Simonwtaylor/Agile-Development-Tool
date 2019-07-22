import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { JSXAttribute } from '@babel/types';

interface ITaskCardProps {
  id: string, 
  title: string,
  storyPoints: number, 
  description: string,
  assignedColumn: number, 
  assignedUser: any
}
 
const TaskCard: React.FC<ITaskCardProps> = 
  ({
    id, 
    title, 
    storyPoints,
    description,  
    assignedColumn, 
    assignedUser
  }) => {

  return (
    <Card 
      className="task-card" 
    >
      <Card.Content>
        <Card.Header>
          {title}
          <Label style={{ float: 'right'}} circular color={'red'} key={'red'}>
            {storyPoints}
          </Label>
        </Card.Header>
        <Card.Meta>
          
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
 
export default TaskCard;