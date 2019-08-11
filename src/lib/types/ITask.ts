export interface ITask {
  _id: string, 
  title: string,
  storyPoints: number, 
  description: string,
  assignedColumn?: number, 
  assignedUser?: any
}