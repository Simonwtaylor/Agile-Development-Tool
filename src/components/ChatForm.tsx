import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

export interface ChatFormProps {
    onNewMesssage: any;
}
 
export interface ChatFormState {
    message: string;
}
 
class ChatForm extends React.Component<ChatFormProps, ChatFormState> {
    constructor(props: ChatFormProps) {
        super(props);
        this.state = { message: '' };
    }

    handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({
            message: e.currentTarget.value
        });
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        let message = {user: 'Simon', message: this.state.message};

        this.props.onNewMesssage(message);
    }

    render() { 
        return (  
            <Form reply>
                <Form.TextArea onChange={this.handleTextChange} />
                <Button onClick={this.handleSubmit} content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        );
    }
}
 
export default ChatForm;