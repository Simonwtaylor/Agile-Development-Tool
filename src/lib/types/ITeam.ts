import { IUser } from ".";

export interface ITeam {
  id: number;
  name: string;
  users: IUser[];
}
