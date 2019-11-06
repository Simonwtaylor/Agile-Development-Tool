import * as React from 'react';
import { TeamListContainer } from '../components/team-list/';

export interface ITeamProps { }
 
const Team: React.FC<ITeamProps> = ({}) => {

  return (
    <>
      <h1>Your Team <span role="img" aria-label="hands">🙌</span></h1>
      <TeamListContainer />
    </>
  );
};

export default Team;