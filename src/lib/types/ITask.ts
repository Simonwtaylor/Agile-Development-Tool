import { IUser } from "./IUser";

export interface ITask {
  _id: string, 
  title: string,
  completed: boolean,
  storyPoints: number, 
  description: string,
  boardId?: string, 
  userId?: string,
  user?: IUser;
}