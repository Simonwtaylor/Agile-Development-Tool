import { createSelector } from 'reselect';

const notificationsReducer = (state: any) => state.notifications;

export const selectTotalNotifications = createSelector(
    [notificationsReducer], 
    (_notifications) => _notifications.total,
); 

export const selectOutstandingUnread = createSelector(
    [notificationsReducer], 
    (_notifications) => _notifications.outstandingUnread,
);

export const selectNotifications = createSelector(
    [notificationsReducer], 
    (_notifications) => _notifications.notifications,
);