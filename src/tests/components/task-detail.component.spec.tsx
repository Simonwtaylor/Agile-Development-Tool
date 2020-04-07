import * as React from 'react';
import { ITaskDetailProps, TaskDetailMode, TaskDetail } from '../../components/task-detail';
import { ITask } from '../../lib/types';
import { shallow } from 'enzyme';
import { CustomButton } from '../../components/custom-button';
import { BoardDropdownContainer, UserDropdownContainer, SprintDropdownContainer } from '../../components/dropdowns';

describe('Task Detail - Component', () => {
  let props: ITaskDetailProps;

  beforeEach(() => {
    props = {
      buttonText: 'Save',
      mode: TaskDetailMode.EDIT,
      onTaskComplete: (task: string) => console.log(task),
      onTaskSave: (task: ITask) => console.log(task),
      taskDetail: {
        id: 1,
        completed: false,
        description: 'Task Description 1',
        storyPoints: 5,
        title: 'Task 1'
      },
    };
  });

  it('Should render properly in edit mode', () => {
    const wrap = shallow(
      <TaskDetail
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    // TODO: Add test in for new icons

    // Title
    expect(
      wrap
        .find('label')
        .at(0)
        .childAt(0)
        .text()
    ).toBe('Title');

    expect(
      wrap
        .find('input')
        .at(0)
        .props()['placeholder']
    ).toBe('Title...');

    expect(
      wrap
        .find('input')
        .at(0)
        .props()['value']
    ).toBe(props.taskDetail!.title);

    expect(
      wrap
        .find('input')
        .at(0)
        .props()['name']
    ).toBe('title');

    // Description
    expect(
      wrap
        .find('label')
        .at(1)
        .childAt(0)
        .text()
    ).toBe('Description');

    expect(
      wrap
        .find('input')
        .at(1)
        .props()['placeholder']
    ).toBe('Description...');

    expect(
      wrap
        .find('input')
        .at(1)
        .props()['value']
    ).toBe(props.taskDetail!.description);

    expect(
      wrap
        .find('input')
        .at(1)
        .props()['name']
    ).toBe('description');

    // Story Points
    expect(
      wrap
        .find('label')
        .at(2)
        .childAt(0)
        .text()
    ).toBe('Story Points');

    expect(
      wrap
        .find('input')
        .at(2)
        .props()['placeholder']
    ).toBe('Story Points...');

    expect(
      wrap
        .find('input')
        .at(2)
        .props()['value']
    ).toBe(props.taskDetail!.storyPoints);

    expect(
      wrap
        .find('input')
        .at(2)
        .props()['name']
    ).toBe('storyPoints');

    // Sprint
    expect(
      wrap
        .find('label')
        .at(3)
        .childAt(0)
        .text()
    ).toBe('Sprint');

    expect(
      wrap
        .find(SprintDropdownContainer)
        .at(0)
        .props()['name']
    ).toBe('sprintId');

    // Board
    expect(
      wrap
        .find('label')
        .at(4)
        .childAt(0)
        .text()
    ).toBe('Board');

    expect(
      wrap
        .find(BoardDropdownContainer)
        .at(0)
        .props()['name']
    ).toBe('boardId');

    // User
    expect(
      wrap
        .find('label')
        .at(5)
        .childAt(0)
        .text()
    ).toBe('User');

    expect(
      wrap
        .find(UserDropdownContainer)
        .at(0)
        .props()['name']
    ).toBe('userId');

    // Button
    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .props()['color']
    ).toBe('green');

    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .props()['inverted']
    ).toBe(true);

    expect(
      wrap
        .find('span')
        .at(1)
        .props()['role']
    ).toBe('img');

    expect(
      wrap
        .find('span')
        .at(1)
        .props()['aria-label']
    ).toBe('save');

    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .childAt(2)
        .text()
    ).toBe('Save');
  });
});