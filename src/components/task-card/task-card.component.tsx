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
    completed,
    history,
    user,
  }) => {

  const getCardColour = (completed: boolean) => {
    if(completed) {
      return 'green'
    }
    return undefined;
  };

  return (
    <Card 
      className="task-card" 
      onClick={() => history.push(`/task/${_id}`)}
      color={getCardColour(completed)}
    >
      <Card.Content>
        <Card.Header>
          <img 
            src={user.photoURL}
            width={'25'}
            height={'25'}
          />
          {title}
          <Label style={{ float: 'right'}} circular color={'red'} key={'red'}>
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
 
export default withRouter(TaskCard);