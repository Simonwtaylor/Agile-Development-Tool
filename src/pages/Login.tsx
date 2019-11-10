import * as React from 'react';
import { SignIn } from '../components/sign-in/';

export interface ILoginProps { }
 
const Login: React.FC<ILoginProps> = () => { 
  return (
    <div className='login'>
      <SignIn />
    </div>
  );
}

export default Login;