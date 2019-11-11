import * as React from 'react';
import { IBoardColumnProps, BoardColumn } from '../../components/board-column';
import { shallow } from 'enzyme';
import { CustomButton } from '../../components/custom-button';
import { TaskCard } from '../../components/task-card';

describe('Board Column - Component', () => {
  let props: IBoardColumnProps;
  let mock: any = jest.fn();
  beforeEach(() => {
    props = {
      columnId: 1,
      columnTitle: 'Example',
      tasks: [],
      history: mock,
      location: mock,
      match: mock,
      staticContext: undefined,
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
        .find('h3')
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.columnTitle);

    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .props()['inverted']
    ).toBe(true);

    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .props()['color']
    ).toBe('green');

    expect(
      wrap
        .find('span')
        .at(0)
        .props()['role']
    ).toBe('img');

    expect(
      wrap
        .find('span')
        .at(0)
        .props()['aria-label']
    ).toBe('save');

    expect(
      wrap
        .find(CustomButton)
        .at(0)
        .childAt(1)
        .text()
    ).toBe(' Add New Task');
  });

  it('Should render a board with tasks', () => {
    props.tasks = [
      {
        _id: '11231',
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