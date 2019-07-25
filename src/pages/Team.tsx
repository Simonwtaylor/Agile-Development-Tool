import * as React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MemberCard from '../components/member-card/member-card.component';

export interface ITeamProps {
  team: any[];
}
 
const Team: React.FC<ITeamProps> = 
  ({
    team
  }) => {

  return (
    <>
      <h1><span role="img" aria-label="hands">🙌</span>Your Team</h1>
      <Grid columns={4} padded>
          <Grid.Row>
          {
            team.map((member: any) => {
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
 

const mapStateToProps = (store: any) => ({
  team: store.team.team
});

export default connect(mapStateToProps)(Team);