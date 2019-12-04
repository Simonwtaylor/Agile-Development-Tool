import { ITask } from ".";

export interface IBoard {
  id: number;
  name: string;
  tasks: ITask[];
}