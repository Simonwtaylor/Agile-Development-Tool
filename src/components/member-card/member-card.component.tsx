import * as React from 'react';
import './member-card.styles.scss';
import { Card } from 'semantic-ui-react';

export interface IMemberCardProps {
  id: number, 
  name: string, 
  role: string,
  currentlyOn: string, 
  imageUrl: string
}
 
const MemberCard: React.FC<IMemberCardProps> = ({
  id, 
  name, 
  role, 
  currentlyOn, 
  imageUrl
}) => {
  return (
    <Card 
      className="task-card" 
    >
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          {role}
        </Card.Meta>
        <Card.Description>
          Currently On: {currentlyOn}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
 
export default MemberCard;