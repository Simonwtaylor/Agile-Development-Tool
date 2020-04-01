import { IUser } from "./IUser";

export interface IComment {
    id: number;
    content: string;
    datePosted: Date;
    user: IUser;
}