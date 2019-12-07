import * as React from 'react';
import './team-list.styles.scss';
import { ITeam } from '../../lib/types';
import TeamItemContainer from './team-item.container';

export interface ITeamListProps {
  teams: ITeam[];
}

const TeamList: React.FC<ITeamListProps> = ({
  teams
}) => {
  const teamElements = [];

  for (const team of teams) {
    teamElements.push(
      <TeamItemContainer
        key={`teamitem${team.id}`}
        team={team}
      />
    );
  }

  return (
    <>
      {teamElements}
    </>
  );
};
 
export default TeamList;