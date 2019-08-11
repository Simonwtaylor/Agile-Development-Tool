import { ITask } from "../../lib/types/";

interface IInitialState {
  tasks: ITask[];
}

const INITIAL_STATE: IInitialState = {
  tasks: [
    {
      _id: '1',
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Task 1'
    },
    {
      _id: '2', 
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Do something cool'
    },
    {
      _id: '3', 
      description: 'This is an example task',
      storyPoints: 2, 
      title: 'Do something even cooler'
    },
    {
      _id: '3', 
      description: 'This is an example task', 
      storyPoints: 2, 
      title: 'Do something even cooler'
    }
  ]
};

const BacklogReducer = (state: IInitialState = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default BacklogReducer;