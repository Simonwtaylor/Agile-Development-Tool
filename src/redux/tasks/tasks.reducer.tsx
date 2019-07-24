
const INITIAL_STATE = {
  tasks: [
    {
      id: '1', 
      assignedColumn: 1, 
      assignedUser: 'Simon Taylor', 
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Task 1'
    },
    {
      id: '2', 
      assignedColumn: 1, 
      assignedUser: 'Simon Taylor', 
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Do something cool'
    },
    {
      id: '3', 
      assignedColumn: 1, 
      assignedUser: 'Simon Taylor', 
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Do something even cooler'
    },
    {
      id: '3', 
      assignedColumn: 2, 
      assignedUser: 'Simon Taylor',
      description: 'This is an example task', 
      storyPoints: 2, 
      title: 'Do something even cooler'
    }
  ]
};

const TasksReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default TasksReducer;