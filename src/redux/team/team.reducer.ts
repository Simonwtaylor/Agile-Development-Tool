const INITIAL_STATE = {
  team: [
    {
      id: 1, 
      name: 'Example Person 1', 
      role: 'Front End Wizard',
      currentlyOn: '#1131',
      imageUrl: ''
    },
    {
      id: 2, 
      name: 'Example Person 2', 
      role: 'Front End Wizard',
      currentlyOn: '#1132',
      imageUrl: ''
    },
    {
      id: 3, 
      name: 'Example Person 3', 
      role: 'Front End Wizard',
      currentlyOn: '#1133',
      imageUrl: ''
    },
    {
      id: 4, 
      name: 'Example Person 4', 
      role: 'Front End Wizard',
      currentlyOn: '#1134',
      imageUrl: ''
    }
  ]
};

const TeamReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default TeamReducer;