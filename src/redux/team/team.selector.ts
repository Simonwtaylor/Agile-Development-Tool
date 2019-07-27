import { createSelector } from 'reselect';

const selectTeam = (state: any) => {
    return state.team;
}

export const selectTeams = createSelector(
    [selectTeam], 
    (_team) => {
        return _team.team;
    }
);