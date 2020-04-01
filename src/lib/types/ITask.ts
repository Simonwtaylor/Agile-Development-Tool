import { IUser } from "./IUser";
import { IBoard } from "./IBoard";
import { IComment } from "./IComment";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  storyPoints: number;
  description: string;
  board?: IBoard;
  user?: IUser;
  comments?: IComment[];
}