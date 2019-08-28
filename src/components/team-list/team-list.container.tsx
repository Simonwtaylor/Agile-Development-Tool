import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectTeams } from '../../redux/team/team.selector';
import { connect } from 'react-redux';
import TeamList from './team-list.component';
import { gql } from 'apollo-boost';

export interface ITeamListContainerProps {
  team?: any;
}

const GET_ALL_TEAMS = gql`
  teams {
    name
    users {
      _id
      photoURL
      displayName
    }
  }
`;

const TeamListContainer: React.FC<ITeamListContainerProps> = ({
  team,
}) => {
  return (
    <TeamList 
      team={team}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  team: selectTeams
});

export default connect(mapStateToProps)(TeamListContainer);