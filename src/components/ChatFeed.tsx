import * as React from 'react';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { Comment, Header } from 'semantic-ui-react';

export interface ChatFeedProps {
    messages: any[],
    onNewMessage: any,
    user: any,
    users: any[]
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
                    { this.props.users.map((usr, i) => {
                        return (<li key={i}>{usr}</li>)
                    })
                    }
                </ul>
                <Comment.Group>
                    <Header as="h3">
                        Discussion
                    </Header>
                    {   this.props.messages.map((message, i) => {
                            console.log(message);
                            const { message: msg, user, _id } = message;

                            return (
                                <ChatMessage key={_id+i} message={msg} user={user} />
                            )
                        })
                    }
                </Comment.Group>

                    
                <ChatForm onNewMesssage={this.props.onNewMessage} />
            </React.Fragment>
         );
    }
}
 
export default ChatFeed;