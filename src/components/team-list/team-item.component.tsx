import * as React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { MemberCard } from '../member-card/';
import { UserDropdownContainer } from '../dropdowns';
import { IUser } from '../../lib/types';

export interface ITeamItemProps {
  id: number;
  name: string;
  users: IUser[];
  onAddUserToTeam: (boardId: number, userId: number) => void;
}

const TeamItem: React.FC<ITeamItemProps> = ({
  id,
  name,
  users,
  onAddUserToTeam,
}) => {

  const [addUser, setAddUser] = React.useState(false);
  const [newUser, setNewUser] = React.useState('');

  const toggleOrSubmitNewUserClick = () => {
    onAddUserToTeam(+id, +newUser);
    setAddUser(!addUser);
  };

  const handleUserChange = (selectUser: any) => {
    setNewUser(selectUser.value);
  };

  return (
    <Grid columns={4} padded className={'team-list'}>
      <h2>{name}</h2>
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
      </Grid.Row>
    </Grid>
  );
}

export default TeamItem;
