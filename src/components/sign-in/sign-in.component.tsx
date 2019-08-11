import * as React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../redux/user/user.sagas';
import { googleSignInStart } from '../../redux/user/user.action';
 
export interface ISignInProps {
  signInWithGoogle?: any;
}
 
export interface ISignInState {
}
 
class SignIn extends React.Component<ISignInProps, ISignInState> {
  constructor(props: ISignInProps) {
    super(props);
    this.state = { 
    };
  }

  getUserInfo = () => {
    if(auth.currentUser && auth.currentUser.photoURL) {
      return <img width={30} height={30} src={auth.currentUser.photoURL} alt="profile sign in" />
    }
    return <></>;
  }

  render() { 
    return (
      <div className="sign-in">
        <h2>
          I already have an account
        </h2>
        <span>
          Sign in with your email and password.
        </span>
        {this.getUserInfo()}
        <CustomButton inverted type="button" color="blue" onClick={this.props.signInWithGoogle}>
          <Icon name="google" />
          Sign in with Google
        </CustomButton>
      </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch: any) => ({
  signInWithGoogle: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);