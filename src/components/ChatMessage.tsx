import * as React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

export interface ChatMessageProps {
    user: string, 
    message: string
}
 
const ChatMessage: React.SFC<ChatMessageProps> = ({ user, message}) => {
    return (
        <Comment>
            <Comment.Avatar>
                <Icon name='user circle' />
            </Comment.Avatar>
            <Comment.Content>
                <Comment.Author as='a'>{user}</Comment.Author>
                <Comment.Metadata>
                <div>Today at 5:42PM</div>
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