import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Board from './components/Board';
import Navbar from './components/Navbar';
import  openSocket from 'socket.io-client';
import ChatFeed from './components/ChatFeed';
import { Grid } from 'semantic-ui-react';

export interface AppProps {
}
 
export interface AppState {
  socket?: SocketIOClient.Socket,
  messages: any[];
  user: any;
  users: any[];
  activeItem: string;
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: [], 
      user: null, 
      users: [],
      activeItem: 'home'
    };
  }

  componentDidMount() {
    this.attachEvents();
  }

  attachEvents = () => {
    const socket = openSocket('https://ancient-peak-81392.herokuapp.com/');

    console.log(socket);

    socket.emit('login', { username: 'Simon Taylor', email: 'Simonwtaylor93@gmail.com'});

    socket.on('allMessages', (messages: any) => {
      this.setState({messages});
    });

    socket.on('newMessage', (data: any) => {
      const messages = [data, ...this.state.messages]

      this.setState({messages})
    });

    socket.on('users', (data: any) => {
      console.log(data);
      this.setState({users:data.users});
    });

    this.setState({socket});
  }

  handleNewMessage = (message: any) => {
    const { socket } = this.state;
    if(socket)
    {
      socket.emit('sendMessage', message);
    }
  }

  handleItemClick = (newPage: string) => {
    this.setState({activeItem: newPage});
  }

  render() { 
    return (  
    <div className="App">
      <Navbar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      <Grid centered columns={2}>
        <Grid.Column>
          <Switch>
            <Route path="/register" component={LoginForm} />   
            <Route path="/login" component={LoginForm} />
            <Route path="/board" component={Board} />
            <Route path="/chat" render={() => { return <ChatFeed user={this.state.user} users={this.state.users} onNewMessage={this.handleNewMessage} messages={this.state.messages} />}} />
            <Redirect from="/" exact to="/login" />
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

export default App;