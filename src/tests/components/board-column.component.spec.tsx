import * as React from 'react';
import { IBoardColumnProps, BoardColumn } from '../../components/board-column';
import { shallow } from 'enzyme';
import { TaskCard } from '../../components/task-card';
import { Popup } from 'semantic-ui-react';

describe('Board Column - Component', () => {
  let props: IBoardColumnProps;
  let mock: any = jest.fn();
  beforeEach(() => {
    props = {
      id: 1,
      columnTitle: 'Example',
      tasks: [],
      history: mock,
      location: mock,
      match: mock,
      staticContext: undefined,
      onBoardRemove: (id: number) => console.log(id),
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <BoardColumn.WrappedComponent
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find('div')
        .at(0)
        .props()['className']
    ).toBe('col card');

    expect(
      wrap
        .find('div')
        .at(1)
        .props()['className']
    ).toBe('card-body card-container');

    expect(
      wrap
        .find('h4')
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.columnTitle);

    expect(
      wrap
        .find(Popup)
        .at(0)
        .props()['content']
    ).toBe(`Add task to ${props.columnTitle}`);

    expect(
      wrap
        .find(Popup)
        .at(0)
        .key()
    ).toBe('boardaddtask');

    expect(
      wrap
        .find(Popup)
        .at(1)
        .props()['content']
    ).toBe(`Change settings for ${props.columnTitle}`);

    expect(
      wrap
        .find(Popup)
        .at(1)
        .key()
    ).toBe('boardsettings');

    expect(
      wrap
        .find(Popup)
        .at(2)
        .props()['content']
    ).toBe(`Delete ${props.columnTitle}`);

    expect(
      wrap
        .find(Popup)
        .at(2)
        .key()
    ).toBe('boarddelete');
  });

  it('Should render a board with tasks', () => {
    props.tasks = [
      {
        id: 1,
        completed: false,
        description: 'example',
        storyPoints: 5,
        title: 'Example 1',
        user: undefined,
      }
    ];

    const wrap = shallow(
      <BoardColumn.WrappedComponent
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(TaskCard)
        .length
    ).toBe(props.tasks.length);

    wrap
      .find(TaskCard)
      .at(0)
      .simulate('click');
  });
});