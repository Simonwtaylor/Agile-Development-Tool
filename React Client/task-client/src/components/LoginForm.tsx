import * as React from 'react';

export interface LoginFormProps {
    
}
 
export interface LoginFormState {
    
}
 
class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <h1>Login Form Works</h1>
         );
    }
}
 
export default LoginForm;