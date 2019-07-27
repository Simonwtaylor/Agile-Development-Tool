import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MemberCard from '../components/member-card/member-card.component';
import { createStructuredSelector } from 'reselect';
import { selectTeams } from '../redux/team/team.selector';

export interface ITeamProps {
  team: any;
}
 
const Team: React.FC<ITeamProps> = 
  ({
    team
  }) => {

  return (
    <>
      <h1>Your Team <span role="img" aria-label="hands">🙌</span></h1>
      <Grid columns={4} padded>
        <h2>{team.name}</h2>
        <Grid.Row>
        {
          team.members.map((member: any) => {
            return (
              <Grid.Column>
                <Card>
                  <MemberCard 
                    key={member.id} 
                    {...member}
                  />
                </Card>
              </Grid.Column>
            )
          })
        }
        </Grid.Row>
      </Grid>
    </>
  );
}
 

const mapStateToProps = createStructuredSelector({
  team: selectTeams
});

export default connect(mapStateToProps)(Team);