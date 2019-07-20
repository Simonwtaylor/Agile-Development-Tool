import * as React from 'react';
import SignIn from '../components/sign-in/sign-in.component';

export interface ILoginProps {
  
}
 
export interface ILoginState {
  
}
 
class Login extends React.Component<ILoginProps, ILoginState> {
  
  constructor(props: ILoginProps) {
    super(props);
    this.state = {  };
  }

  render() { 
    return (
      <div className=''>
        <SignIn />
      </div>
    );
  }
}
 
export default Login;