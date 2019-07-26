import * as React from 'react';
import './member-card.styles.scss';
import { Card, Label } from 'semantic-ui-react';

export interface IMemberCardProps {
  id: number, 
  name: string, 
  role: string,
  currentlyOn: string, 
  imageUrl: string, 
  color?: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | undefined
}

const MemberCard: React.FC<IMemberCardProps> = ({
  id, 
  name, 
  role, 
  currentlyOn, 
  imageUrl,
  color
}) => {
  return (
    <Card 
      className="task-card" 
    >
      <Card.Content>
        <Card.Header>
          {name}
          <Label className='status-label' circular color={color} empty />
        </Card.Header>
        <Card.Meta>
          {role}
        </Card.Meta>
        <Card.Description>
          Currently On: <a href="/team">{currentlyOn}</a>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
 
export default MemberCard;