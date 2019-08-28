import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTeams } from '../redux/team/team.selector';
import TeamListContainer from '../components/team-list/team-list.container';

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
          <TeamListContainer />
        </Grid.Row>
      </Grid>
    </>
  );
}
 

const mapStateToProps = createStructuredSelector({
  team: selectTeams
});

export default connect(mapStateToProps)(Team);