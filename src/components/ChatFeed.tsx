import * as React from 'react';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';

export interface ChatFeedProps {
    messages: any[],
    onNewMessage: any
}
 
export interface ChatFeedState {
    
}
 
class ChatFeed extends React.Component<ChatFeedProps, ChatFeedState> {
    constructor(props: ChatFeedProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return (
            <React.Fragment>
                <ul>
                    { this.props.messages.map(message => {
                        const { message: msg, user, _id } = message;

                        return (
                            <li>
                                <ChatMessage key={_id} message={msg} user={user} />
                            </li>
                            )
                        })
                    }
                </ul>
                <ChatForm onNewMesssage={this.props.onNewMessage} />
            </React.Fragment>
         );
    }
}
 
export default ChatFeed;