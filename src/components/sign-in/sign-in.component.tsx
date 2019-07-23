import * as React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { Icon } from 'semantic-ui-react';
 
export interface ISignInProps {
  
}
 
export interface ISignInState {
  email: string;
  password: string;
}
 
class SignIn extends React.Component<ISignInProps, ISignInState> {
  constructor(props: ISignInProps) {
    super(props);
    this.state = { 
      email: '',
      password: '' 
    };

    console.log(auth.currentUser)
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.setState({ 
      email: '',
      password: '' 
    });
  };

  getUserInfo = () => {
    if(auth.currentUser && auth.currentUser.photoURL) {
      return <img width={30} height={30} src={auth.currentUser.photoURL} alt="profile sign in" />
    }
    return <></>;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    
    this.setState(
      {
        [name]: value
      } as Pick<ISignInState, keyof ISignInState>);
      
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

        <form onSubmit={this.handleSubmit}>
          <CustomInput 
            type="email" 
            name="email" 
            id="" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            required 
            label="Email"
          />
          <CustomInput 
            type="password" 
            name="password" 
            id="" 
            value={this.state.password} 
            handleChange={this.handleChange} 
            required 
            label="Password"
          />
          <CustomButton inverted type="submit" color="green">
            <Icon name="lock open" />
            Log In
          </CustomButton>
          <CustomButton type="button" color="white" onClick={signInWithGoogle}>
            <Icon name="google" />
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
 
export default SignIn;