import * as React from 'react';

export interface ChatMessageProps {
    user: string, 
    message: string
}
 
const ChatMessage: React.SFC<ChatMessageProps> = ({ user, message}) => {
    return (
        <div className="card">
            {user} - {message}
        </div>
    );
}
 
export default ChatMessage;