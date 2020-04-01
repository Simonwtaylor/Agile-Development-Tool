import * as React from 'react';
import { IComment } from '../../lib/types';
import { Comment, Header, Form, Button, TextAreaProps } from 'semantic-ui-react';
import { DateService } from '../../services';

export interface ICommentsProps {
    comments: IComment[];
    onAddComment: (content: string) => void;
}
 
const Comments: React.FC<ICommentsProps> = ({
    comments,
    onAddComment,
}) => {

    const [content, setContent] = React.useState('');

    const handleTextChange = (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        setContent(event.currentTarget.value);
    };

    const onAddCommentClick = () => {
        onAddComment(content);
        setContent('');
    };

    return (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            {
                (comments && comments.map((comment: IComment) => {
                    return (
                        <Comment>
                            <Comment.Avatar src={comment.user.photoURL} />
                            <Comment.Content>
                            <Comment.Author as='a'>{comment.user.displayName}</Comment.Author>
                            <Comment.Metadata>
                                <div>{DateService.formatDate(comment.datePosted)}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.content}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    )
                }))
            }
            <Form reply>
                <Form.TextArea
                    value={content}
                    onChange={handleTextChange}
                />
                <Button
                    content='Add Reply'
                    labelPosition='left'
                    icon='edit'
                    onClick={onAddCommentClick}
                    primary
                />
            </Form>
        </Comment.Group>
    );
}
 
export default Comments;