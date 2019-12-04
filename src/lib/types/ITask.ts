import { IUser } from "./IUser";
import { IBoard } from "./IBoard";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  storyPoints: number;
  description: string;
  board?: IBoard;
  user?: IUser;
}