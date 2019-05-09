import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Board from './components/Board';
import Navbar from './components/Navbar';
import { Socket } from 'socket.io-client';
import  openSocket from 'socket.io-client';
import ChatFeed from './components/ChatFeed';
import firebase from "firebase";


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
};

export interface AppProps {
  
}
 
export interface AppState {
  socket?: SocketIOClient.Socket,
  messages: any[], 
  user: firebase.User | null;
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [], 
      user: null
    };
    
    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user: user});
      if (user) {
        // login
      } else {
        // logout
      }
    })
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
    </div>
    );
  }
}

export default App;