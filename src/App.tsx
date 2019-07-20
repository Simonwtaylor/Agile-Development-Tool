import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Board from './pages/Board';
import Navbar from './components/navbar/navbar.component';
import { Grid } from 'semantic-ui-react';
import { auth } from './firebase/firebase.utils';
import Login from './pages/Login';

export interface AppProps {
}
 
export interface AppState {
  activeItem: string;
  currentUser: any;
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      activeItem: 'home',
      currentUser: null
    };
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  handleItemClick = (newPage: string) => {
    this.setState({activeItem: newPage});
  }

  render() { 
    return (  
    <div className="App">
      <Navbar user={this.state.currentUser} activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      <Grid>
        <Grid.Column>
          <Switch>  
            <Route path="/board" component={Board} />
            <Route path="/login" component={Login} />
            <Redirect from="/" exact to="/login" />
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

export default App;