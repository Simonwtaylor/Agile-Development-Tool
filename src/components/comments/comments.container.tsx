import * as React from 'react';
import Comments from './comments.component';
import { useQuery, useApolloClient, useMutation } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import { getCommentsByTaskId } from '../../queries/comments.queries';
import { addComment } from '../../mutations/comment.mutations';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';

export interface ICommentsContainerProps {
    taskId: number;
}
 
const CommentsContainer: React.FC<ICommentsContainerProps> = ({
    taskId,
}) => {

    const client = useApolloClient();

    const [addCommentMutation] = useMutation(addComment, {
      client,
    });

    const user: any = useSelector(selectCurrentUser);

    const handleAddComment = (content: string) => {
      addCommentMutation({
        variables: {
          content,
          uid: user.uid,
          taskId: +taskId,
        },
        refetchQueries: [
          {
            query: getCommentsByTaskId,
            variables: {
              taskId: +taskId,
            }
          }
        ]
      });
    };
    
    const { loading, error, data } = useQuery(getCommentsByTaskId, {
        variables: { 
          taskId: +taskId,
        },
        client,
      });
    
      if (error) return (
        <div
          style={{
            width: '200px',
            margin: '0px auto'
          }}
        >
          <h4>Error loading comments <span role="img" aria-label="locks">😞</span></h4>
        </div>
      );
    
      if (loading) return <Loader />;

    return (
        <Comments
            onAddComment={handleAddComment}
            comments={data.getCommentsByTaskId}
        />
    );
}
 
export default CommentsContainer;