import { IBoard } from ".";

export interface ISprint {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  completed: boolean;
  boards?: IBoard[];
}
