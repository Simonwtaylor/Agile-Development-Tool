import * as React from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Send</button>
            </form>
        );
    }
}
 
export default ChatForm;