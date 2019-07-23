import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Board from './pages/Board';
import Navbar from './components/navbar/navbar.component';
import { Grid } from 'semantic-ui-react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Login from './pages/Login';
import User from './pages/User';
import Team from './pages/Team';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';

export interface AppProps {
  currentUser?: any;
  setCurrentUser: any;
}
 
export interface AppState {
  activeItem: string;
  
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const userRef = await createUserProfileDocument(user, {});

        if(userRef) {
          userRef.onSnapshot(snap => {
            setCurrentUser({
              id: userRef.id, 
              ...snap.data()
            })
          })

        }
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  handleItemClick = (newPage: string) => {
    this.setState({activeItem: newPage});
  }

  render() { 

    const { currentUser } = this.props;

    return (  
    <div className="App">
      <Navbar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      <Grid>
        <Grid.Column>
          <Switch>  
            <Route path="/board" component={Board} />
            <Route path="/login" component={Login} />
            <Route 
              path="/user" 
              render={() => <User />} 
            />
            <Route 
              path="/team" 
              render={() => <Team />} 
            />
            {
              (currentUser)
              ?
                <Redirect from="/" exact to="/login" />
              : <Redirect from="/" exact to="/board" />
            }
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  currentUser: store.user.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);