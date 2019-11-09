import * as React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface ITaskCardProps extends RouteComponentProps {
  _id: string;
  title: string;
  storyPoints: number;
  description: string;
  completed: boolean;
  history: any;
  user: any;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  _id, 
  title, 
  storyPoints,
  description,  
  completed,
  history,
  user,
}) => {

  const getCardColour = () => {
    if(completed) {
      return 'green'
    }
    return undefined;
  };

  return (
    <Card 
      className="task-card" 
      onClick={() => history.push(`/task/${_id}`)}
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