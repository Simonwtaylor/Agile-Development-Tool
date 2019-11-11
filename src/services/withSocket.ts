import  openSocket from 'socket.io-client';

export default class withSocket {
    attachEvents = () => {
      const socket = openSocket(process.env.REACT_APP_WS || '');
  
      socket.emit('login', { username: 'Simon Taylor', email: 'Simonwtaylor93@gmail.com'});
  
      socket.on('allMessages', (messages: any) => {
        
      });
  
      socket.on('newMessage', (data: any) => {

      });
  
      socket.on('users', (data: any) => {
        
      });
  };
}