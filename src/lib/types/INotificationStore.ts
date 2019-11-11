import { INotification } from ".";

export interface INotificationStore {
  total: number;
  outstandingUnread: boolean;
  notifications: INotification[];
}