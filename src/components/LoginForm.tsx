import * as React from 'react';
import firebase from "firebase";
import firebaseui from 'firebaseui';

export interface LoginFormProps {
    
}
 
export interface LoginFormState {
    
}

const uiConfig = ({
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/terms-of-service'
});

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);

        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui', uiConfig);

        this.state = { };
    }
    render() { 
        return ( 
            <div id="firebaseui"></div>
        );
    }
}
 
export default LoginForm;