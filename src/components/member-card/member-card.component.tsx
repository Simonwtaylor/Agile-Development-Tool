import * as React from 'react';
import './member-card.styles.scss';
import { Card, Label, Button, LabelProps } from 'semantic-ui-react';
import { ITask } from '../../lib/types';

export interface IMemberCardProps extends LabelProps {
  displayName: string;
  role: string,
  currentTask: ITask, 
}

const MemberCard: React.FC<IMemberCardProps> = ({
  displayName,
  role, 
  currentTask,
  color,
}) => {
  return (
    <Card 
      className="task-card"
    >
      <Card.Content>
        <Card.Header>
          {displayName}
          <Label className='status-label' circular color={color} empty />
        </Card.Header>
        <Card.Meta>
          {role}
        </Card.Meta>
        <Card.Description>
          {
            (
              currentTask
              ?
              (
                <>
                  Currently On:<a href={`/task/${currentTask.id}`}>{currentTask.title}</a>
                </>
              )
              :
              (
                <>
                  Nothing to do 😲, <a href={'/board'}>Change that</a>
                </>
              )
            )
          }
          {

          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue' size='small'>
            <span role="img" aria-label="msg">✉</span> Chat
          </Button>
          <Button basic color='purple' size='small'>
            <span role="img" aria-label="activity">✨</span> Activity
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
 
export default MemberCard;