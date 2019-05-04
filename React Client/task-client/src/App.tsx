import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Board from './components/Board';
import Navbar from './components/Navbar';
import { Socket } from 'socket.io-client';
import  openSocket from 'socket.io-client';
import ChatFeed from './components/ChatFeed';

export interface AppProps {
  
}
 
export interface AppState {
  socket?: SocketIOClient.Socket,
  messages: any[]
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.attachEvents();
  }

  attachEvents = () => {
    const socket = openSocket('http://localhost:8080/');
    socket.on('allMessages', (data: any) => {
      this.setState({messages: data})
    });

    socket.on('newMessage', (data: any) => {
      const messages = [data, ...this.state.messages]

      this.setState({messages})
    });

    this.setState({socket});
  }

  handleNewMessage = (message: any) => {
    if(this.state.socket)
    {
      const socket = {...this.state.socket};

      socket.emit('sendMessage', message);
    }
  }

  render() { 
    return (  
    <div className="App">
      <Navbar />
      <Switch>
          <Route path="/register" component={LoginForm} />   
          <Route path="/login" component={LoginForm} />
          <Route path="/board" component={Board} />
          <Route path="/chat" render={() => { return <ChatFeed onNewMessage={this.handleNewMessage} messages={this.state.messages} />}} />
          <Redirect from="/" exact to="/login" />
      </Switch>
    </div>);
  }
}

export default App;