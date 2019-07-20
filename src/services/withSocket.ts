import  openSocket from 'socket.io-client';

export default class withSocket {
    attachEvents = () => {
        const socket = openSocket('https://ancient-peak-81392.herokuapp.com/');
    
        console.log(socket);
    
        socket.emit('login', { username: 'Simon Taylor', email: 'Simonwtaylor93@gmail.com'});
    
        socket.on('allMessages', (messages: any) => {
          
        });
    
        socket.on('newMessage', (data: any) => {

        });
    
        socket.on('users', (data: any) => {
        });
    
        
      }
}