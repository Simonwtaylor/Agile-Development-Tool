export interface ITask {
  id: string, 
  title: string,
  storyPoints: number, 
  description: string,
  assignedColumn?: number, 
  assignedUser?: any
}