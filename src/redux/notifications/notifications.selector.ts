import { createSelector } from 'reselect';

const notificationsReducer = (state: any) => state.userNotifications;

export const selectNotifications = createSelector(
    [notificationsReducer], 
    (_notifications) => _notifications.userNotifications,
);