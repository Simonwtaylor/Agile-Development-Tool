import * as React from 'react';
import { Grid, Card, Button, Icon, Popup } from 'semantic-ui-react';
import { MemberCard } from '../member-card/';
import { UserDropdownContainer } from '../dropdowns';
import { IUser } from '../../lib/types';

export interface ITeamItemProps {
  id: number;
  name: string;
  users: IUser[];
  onAddUserToTeam: (boardId: number, userId: number) => void;
  onRemoveTeam: () => void;
}

const TeamItem: React.FC<ITeamItemProps> = ({
  id,
  name,
  users,
  onAddUserToTeam,
  onRemoveTeam
}) => {
  const [showAddNewUser, onShowAddNewUser] = React.useState(false);
  const [addUser, setAddUser] = React.useState(false);
  const [newUser, setNewUser] = React.useState('');

  const toggleOrSubmitNewUserClick = () => {
    onAddUserToTeam(+id, +newUser);
    setAddUser(!addUser);
  };

  const toggleShowAddNewUser = () => {
    onShowAddNewUser(!showAddNewUser);
  };

  const handleUserChange = (selectUser: any) => {
    setNewUser(selectUser.value);
  };

  const getAddNewUser = () => {
    if (showAddNewUser) {
      return (
        <Grid.Column>
          <Card 
            className="task-card add-new"
          >
            <Card.Content>
              <Card.Header>
                It's lonely here...
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <UserDropdownContainer
                onSelectUser={handleUserChange}
                selectedUser={newUser}
                name={'userId'}
              />
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button
                  color='green'
                  inverted={true}
                  onClick={toggleOrSubmitNewUserClick}
                >
                  <span role="img" aria-label="activity">🙋</span> Add User to Team
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    }

    return <></>;
  };

  return (
    <Grid columns={4} padded className={'team-list'}>
      <h2>
        {name}
      </h2>
      <Popup
        content={'Add new user'}
        key={`teamsadd${id}`}
        trigger={
          <Icon
            color={'green'}
            name={'plus circle'}
            style={{
              cursor: 'pointer',
              marginTop: '5px'
            }}
            onClick={toggleShowAddNewUser}
          />
        }
      />
      <Popup
        content={`Change settings for ${name}`}
        key={`teamssettings${id}`}
        trigger={
          <Icon
            color={'blue'}
            name={'settings'}
            style={{
              cursor: 'pointer',
              marginTop: '5px'
            }}
            onClick={toggleShowAddNewUser}
          />
        }
      />
      <Popup
        content={`Delete ${name}`}
        key={`teamsdelete${id}`}
        trigger={
          <Icon
            color={'red'}
            name={'trash'}
            style={{
              cursor: 'pointer',
              marginTop: '5px'
            }}
            onClick={onRemoveTeam}
          />
        }
      />
      <Grid.Row>
      {
        users.map((user: any) => {
          return (
            <Grid.Column key={`teamusergrid${user.id}`} >
              <Card>
                <MemberCard 
                  key={`teamuser${user.id}`} 
                  {...user}
                />
              </Card>
            </Grid.Column>
          )
        })
      }
      {getAddNewUser()}
      </Grid.Row>
    </Grid>
  );
}

export default TeamItem;
