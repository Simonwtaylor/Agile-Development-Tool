import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import MemberCard from '../member-card/member-card.component';

export interface ITeamListProps {
  team: any;
}
 
const TeamList: React.SFC<ITeamListProps> = ({
  team,
}) => {
  return (
    <>
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
    </>
  );
}
 
export default TeamList;