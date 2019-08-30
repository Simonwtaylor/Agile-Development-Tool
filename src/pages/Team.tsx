import * as React from 'react';
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
      <TeamListContainer />
    </>
  );
}
 

const mapStateToProps = createStructuredSelector({
  team: selectTeams
});

export default connect(mapStateToProps)(Team);