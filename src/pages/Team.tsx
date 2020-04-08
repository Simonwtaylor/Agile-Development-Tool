import * as React from 'react';
import { TeamListContainer, NewTeamContainer } from '../components/team-list/';

export interface ITeamProps { }
 
const Team: React.FC<ITeamProps> = () => {
  return (
    <div className={'team'}>
      <NewTeamContainer />
      <TeamListContainer />
    </div>
  );
};

export default Team;