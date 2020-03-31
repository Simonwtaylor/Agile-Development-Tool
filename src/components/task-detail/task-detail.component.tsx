import * as React from 'react';
import { Card, Form, Popup, Icon, Grid, Comment, Header, Button } from 'semantic-ui-react';
import { CustomButton } from '../custom-button';
import './task-detail.styles.scss';
import { ITask } from '../../lib/types';
import {
  BoardDropdownContainer,
  UserDropdownContainer,
} from '../dropdowns';
import { TaskDetailMode } from './task-detail.enum';

export interface ITaskDetailProps {
  taskDetail?: ITask;
  onTaskSave: (task: ITask) => void;
  buttonText: string;
  mode: TaskDetailMode;
  onTaskComplete?: (task: string) => void;
  onTaskDelete?: (id: number) => void;
}
 
const TaskDetail: React.FC<any> = ({
  taskDetail,
  onTaskSave,
  buttonText,
  mode,
  onTaskComplete,
  onTaskDelete,
}) => {

  const [task, setTask] = React.useState(taskDetail);

  const [selectedBoard, onSelectedBoard] = React.useState(
    (task && task.board && task.board.id) ? task.board.id : null
  );

  const [selectedUser, onSelectedUser] = React.useState(
    (task && task.user && task.user.id) ? task.user.id : null
  );

  const handleFormChange = (e: any) => {
    const taskNew = {...task};
    let value = e.target.value;

    if (e.target.name === 'storyPoints') {
      value = Number.parseFloat(value);
    }

    taskNew[e.target.name] = value;

    setTask({
      ...taskNew,
    });
  };

  const handleUserChange = (selectItem: any) => {
    const taskNew = {...task}

    let value = selectItem.value;

    taskNew.userId = +value;

    setTask({
      ...taskNew
    });

    onSelectedUser(value);
  };

  const handleBoardChange = (selectItem: any) => {
    const taskNew = {...task}

    let value = selectItem.value;

    taskNew.boardId = +value;

    setTask({
      ...taskNew
    });

    onSelectedBoard(value);
  };

  const handleCompleteClick = () => {
    onTaskComplete(task.id);
  };

  const handleSubmitClick = () => {
    onTaskSave({...task});
  };

  const handleDeleteClick = () => {
    onTaskDelete(task.id);
  };

  const getCompletedText = (): string => {
    if (!task.completed) {
      return 'Complete Task';
    }
    return 'Mark as undone';
  };

  const getIconFill = (completed: boolean): 'check circle' | 'check circle outline' => {
    if (!completed) {
      return 'check circle outline';
    }
    return 'check circle';
  };

  return (
    <Card className={'task-detail'}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <Form>
              <Card.Content>
                <Card.Header>
                  {
                    (mode === TaskDetailMode.EDIT &&
                      <>
                        <Popup
                          content={getCompletedText}
                          key={`taskcompleteicon`}
                          trigger={
                            <Icon
                              color={'green'}
                              name={getIconFill(task.completed)}
                              size={'large'}
                              style={{
                                cursor: 'pointer',
                                marginTop: '10px',
                                marginLeft: '10px',
                                float: 'left'
                              }}
                              onClick={handleCompleteClick}
                            />
                          }
                        />
                        <Popup
                          content={'Delete Task '}
                          key={`taskdeleteicon`}
                          trigger={
                            <Icon
                              color={'red'}
                              name={'trash'}
                              size={'large'}
                              style={{
                                cursor: 'pointer',
                                marginTop: '10px',
                                marginRight: '10px',
                                float: 'right'
                              }}
                              onClick={handleDeleteClick}
                            />
                          }
                        />
                      </>
                    )
                  }
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Form.Field>
                  <label>Title</label>
                  <input 
                    placeholder='Title...'
                    value={task.title}
                    name={'title'}
                    onChange={handleFormChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input 
                    placeholder='Description...'
                    value={task.description}
                    name={'description'}
                    onChange={handleFormChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Story Points</label>
                  <input 
                    placeholder='Story Points...' 
                    value={task!.storyPoints} 
                    type='number' 
                    name={'storyPoints'}
                    onChange={handleFormChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Board</label>
                  <BoardDropdownContainer
                    handleBoardSelect={handleBoardChange}
                    selectedBoard={selectedBoard}
                    name={'boardId'}
                  />
                </Form.Field>
                <Form.Field>
                  <label>User</label>
                  <UserDropdownContainer
                    onSelectUser={handleUserChange}
                    selectedUser={selectedUser}
                    name={'userId'}
                  />
                </Form.Field>
                <CustomButton
                  className={'submit'}
                  color={'green'}
                  inverted
                  onClick={handleSubmitClick}
                >
                  <span role="img" aria-label="save">💾</span> {buttonText}
                </CustomButton>
              </Card.Content>
            </Form>
          </Grid.Column>
          <Grid.Column width={6}>
            <Comment.Group>
              <Header as='h3' dividing>
                Comments
              </Header>
              {
                (task.comments && task.comments.map((comment: any) => {
                  return (
                  <Comment>
                    <Comment.Avatar src={comment.user.photoURL} />
                    <Comment.Content>
                      <Comment.Author as='a'>{comment.user.displayName}</Comment.Author>
                      <Comment.Metadata>
                        <div>{comment.datePosted}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment.content}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                  )
                }))
              }
              
              <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </Card>
  );
};

export default TaskDetail;