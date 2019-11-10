const INITIAL_STATE = {
  total: 1,
  outstandingUnread: true,
  notifications: [
    {
      id: 1, 
      messageContent: 'Example Message 1', 
      read: false,
    },
  ],
};

const NotificationsReducer = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default NotificationsReducer;