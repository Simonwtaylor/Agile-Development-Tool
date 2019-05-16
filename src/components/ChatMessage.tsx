import * as React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

export interface ChatMessageProps {
    user: string, 
    message: string,
    time: Date
}
 
const ChatMessage: React.SFC<ChatMessageProps> = ({ user, message, time }) => {
    return (
        <Comment>
            <Comment.Avatar>
                <Icon name='user circle' />
            </Comment.Avatar>
            <Comment.Content>
                <Comment.Author as='a'>{user}</Comment.Author>
                <Comment.Metadata>
                <div>{new Date(time).toLocaleString() }</div>
                </Comment.Metadata>
                <Comment.Text>{message}</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
}
 
export default ChatMessage;