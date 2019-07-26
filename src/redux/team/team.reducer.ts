const INITIAL_STATE = {
  team: {
    name: 'User Interface',
    members: [
      {
        id: 1, 
        name: 'Example Person 1', 
        role: 'Front End Wizard',
        currentlyOn: '#1131',
        imageUrl: '',
        color: 'green'
      },
      {
        id: 2, 
        name: 'Example Person 2', 
        role: 'CSS God',
        currentlyOn: '#1132',
        imageUrl: '',
        color: 'green'
      },
      {
        id: 3, 
        name: 'Example Person 3', 
        role: 'Code Monkey',
        currentlyOn: '#1133',
        imageUrl: '',
        color: 'green'
      },
      {
        id: 4, 
        name: 'Example Person 4', 
        role: 'Coffee Fetcher',
        currentlyOn: '#1134',
        imageUrl: '',
        color: 'red'
      }
    ]
  }
};

const TeamReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default TeamReducer;