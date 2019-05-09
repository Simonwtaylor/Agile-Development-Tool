import * as React from 'react';

export interface RegisterFormProps {
    
}
 
export interface RegisterFormState {
    
}
 
class RegisterForm extends React.Component<RegisterFormProps, RegisterFormState> {
    constructor(props: RegisterFormProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <h1>Register Form Works</h1>
         );
    }
}
 
export default RegisterForm;