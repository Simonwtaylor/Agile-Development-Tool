import * as React from 'react';
import Comments from './comments.component';
import { useQuery, useApolloClient, useMutation } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import { GET_COMMENTS_BY_TASK } from '../../queries/comments.queries';
import { ADD_COMMENT } from '../../mutations/comment.mutations';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';

export interface ICommentsContainerProps {
    taskId: number;
}
 
const CommentsContainer: React.FC<ICommentsContainerProps> = ({
    taskId,
}) => {

    const client = useApolloClient();

    const [addComment] = useMutation(ADD_COMMENT, {
      client,
    });

    const user: any = useSelector(selectCurrentUser);

    console.log(user);

    const handleAddComment = (content: string) => {
      addComment({
        variables: {
          content,
          uid: user.uid,
          taskId: +taskId,
        },
        refetchQueries: [
          {
            query: GET_COMMENTS_BY_TASK,
            variables: {
              taskId: +taskId,
            }
          }
        ]
      });
    };
    
    const { loading, error, data } = useQuery(GET_COMMENTS_BY_TASK, {
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