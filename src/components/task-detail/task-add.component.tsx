import * as React from 'react';
import { Grid, Form, Card } from 'semantic-ui-react';
import { UserDropdownContainer, BoardDropdownContainer } from '../dropdowns';
import { CustomButton } from '../custom-button';

export interface ITaskAddProps {
  onTaskSave: (task: any) => void;
}
 
const TaskAdd: React.FC<ITaskAddProps> = ({
  onTaskSave,
}) => {
  
  const [task, setTask] = React.useState<any>({});
  const [selectedBoard, onSelectedBoard] = React.useState(null);

  const [selectedUser, onSelectedUser] = React.useState(null);

  const handleFormChange = (e: any) => {
    const taskNew: any = {...task};
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

  const handleSubmitClick = () => {
    onTaskSave({...task});
  };

  return (
    <Form>
      <Card className={'task-detail'}>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Card.Content className={'body'}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={14}>
                    <Form.Field>
                      <label>Title</label>
                      <input
                        placeholder='Title...'
                        value={task.title}
                        name={'title'}
                        onChange={handleFormChange}
                      />
                    </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={2}>
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
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row
                    columns={2}
                  >
                    <Grid.Column>
                      <Form.Field>
                        <label>User</label>
                        <UserDropdownContainer
                          onSelectUser={handleUserChange}
                          selectedUser={selectedUser}
                          name={'userId'}
                        />
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                      <Form.Field>
                        <label>Board</label>
                        <BoardDropdownContainer
                          handleBoardSelect={handleBoardChange}
                          selectedBoard={selectedBoard}
                          name={'boardId'}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Form.Field>
                  <label>Description</label>
                  <textarea
                    className={'description'}
                    placeholder='Description...'
                    value={task.description}
                    name={'description'}
                    onChange={handleFormChange}
                  />
                </Form.Field>
                <Form.Field>
                  <CustomButton
                    color={'green'}
                    onClick={handleSubmitClick}
                  >
                    Save Task
                  </CustomButton>
                </Form.Field>
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </Form>
  );
}
 
export default TaskAdd;