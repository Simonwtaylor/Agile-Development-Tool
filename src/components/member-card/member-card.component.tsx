import * as React from 'react';
import './member-card.styles.scss';
import { Card, LabelProps, Image, Popup, Icon } from 'semantic-ui-react';
import { ITask } from '../../lib/types';

export interface IMemberCardProps extends LabelProps {
  id: number;
  displayName: string;
  role: string;
  currentTask: ITask | null;
  photoURL?: string;
  onRemoveUserFromTeam: (id: number) => void;
}

const MemberCard: React.FC<IMemberCardProps> = ({
  id,
  displayName,
  role, 
  currentTask,
  photoURL,
  onRemoveUserFromTeam,
}) => {

  const onUserRemoveClick = () => {
    onRemoveUserFromTeam(id);
  };

  return (
    <Card 
      className="task-card"
    >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={photoURL}
        />
        <Card.Header>
          {displayName}
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
        <Popup
          content={`Chat with ${displayName}`}
          key={`chatmember${displayName}`}
          trigger={
            <Icon
              color={'green'}
              name={'chat'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={() => console.log('chatting')}
            />
          }
        />
        <Popup
          content={`Adjust preferences for ${displayName}`}
          key={`settingsmember${displayName}`}
          trigger={
            <Icon
              color={'grey'}
              name={'settings'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={() => console.log('settings')}
            />
          }
        />
        <Popup
          content={`Remove ${displayName} from team`}
          key={`removemember${displayName}`}
          trigger={
            <Icon
              color={'red'}
              name={'trash'}
              style={{
                cursor: 'pointer',
                marginTop: '5px'
              }}
              onClick={onUserRemoveClick}
            />
          }
        />
      </Card.Content>
    </Card>
  );
}

export default MemberCard;
