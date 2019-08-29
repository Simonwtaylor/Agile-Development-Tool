import * as React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import MemberCard from '../member-card/member-card.component';
import UserDropdownContainer from '../dropdowns/user-dropdown.container';

export interface ITeamListProps {
  team: any;
  onAddUserToTeam: (boardId: string, userId: string) => void;
}
 
const TeamList: React.FC<ITeamListProps> = ({
  team,
  onAddUserToTeam,
}) => {

  const [addUser, setAddUser] = React.useState(false);
  const [newUser, setNewUser] = React.useState('');

  const toggleOrSubmitNewUserClick = () => {
    if (!addUser) {
      setAddUser(!addUser);
    }
    else {
      onAddUserToTeam(team._id, newUser);
      setAddUser(!addUser);
    }
  };

  const handleUserChange = (selectUser: any) => {
    setNewUser(selectUser.value);
  }

  return (
    <Grid columns={4} padded>
      <h2>{team.name}</h2>
      <Grid.Row>
      {
        team.users.map((user: any) => {
          return (
            <Grid.Column>
              <Card>
                <MemberCard 
                  key={user._id} 
                  {...user}
                />
              </Card>
            </Grid.Column>
          )
        })
      }
        <Grid.Column>
          <Card 
            className="task-card"
            style={{
              border: '1px dashed darkgrey',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
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
 
export default TeamList;