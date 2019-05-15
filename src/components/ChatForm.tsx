import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

export interface ChatFormProps {
    onNewMesssage: any;
}
 
export interface ChatFormState {
    
}
 
class ChatForm extends React.Component<ChatFormProps, ChatFormState> {
    constructor(props: ChatFormProps) {
        super(props);
        this.state = {  };
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        let message = {
            user: 'Simon', 
            message: 'oauishduaiohsdauishd'
        };

        this.props.onNewMesssage(message);
    }

    render() { 
        return (  
            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        );
    }
}
 
export default ChatForm;