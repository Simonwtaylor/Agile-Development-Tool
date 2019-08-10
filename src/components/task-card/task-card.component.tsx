import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

interface ITaskCardProps {
  _id: string, 
  title: string,
  storyPoints: number, 
  description: string,
  assignedColumn?: number, 
  assignedUser?: any
  history?: any;
}
 
const TaskCard: React.FC<any> = 
  ({
    _id, 
    title, 
    storyPoints,
    description,  
    assignedColumn, 
    assignedUser,
    history
  }) => {

  return (
    <Card 
      className="task-card" 
      onClick={() => history.push(`/task/${_id}`)}
    >
      <Card.Content>
        <Card.Header>
          {title}
          <Label style={{ float: 'right'}} circular color={'red'} key={'red'}>
            {storyPoints}
          </Label>
        </Card.Header>
        <Card.Meta>
          {assignedUser}
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
 
export default withRouter(TaskCard);