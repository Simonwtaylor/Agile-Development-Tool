import { ITask } from ".";

export interface IBoard {
  _id: number;
  name: string;
  tasks: ITask[];
}