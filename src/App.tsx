import React from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Grid } from 'semantic-ui-react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {
  Login,
  User,
  Team,
  Backlog,
  Task,
  Sprint,
  AddSprintPage,
} from './pages/';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, setCurrentUser } from './redux/user';

export interface IAppProps {
  currentUser?: any;
  setCurrentUser: any;
}
 
export interface IAppState {
  activeItem: string;
}
 
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});

        if (userRef) {
          setCurrentUser({
            id: userRef.id, 
            ...userRef,
          });
        }
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  handleItemClick = (activeItem: string) => {
    this.setState({ activeItem } );
  }

  render() { 

    const { currentUser } = this.props;

    return (  
    <div className="App">
      <Navbar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
      <Grid>
        <Grid.Column>
          <Switch>
            <Route path="/login" component={Login} />
            <Route 
              path="/user" 
              component={User} 
            />
            <Route 
              path="/backlog"
              component={Backlog}
            />
            <Route 
              path="/team" 
              component={Team}
            />
            <Route
              path='/task/:id'
              component={Task}
            />
            <Route
              path='/sprint/add'
              component={AddSprintPage}
            />
            <Route
              path='/sprint'
              component={Sprint}
              
            />
            {
              (!currentUser)
              ?
                <Redirect from="/" exact to="/login" />
              : <Redirect from="/" exact to="/sprint" />
            }
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);