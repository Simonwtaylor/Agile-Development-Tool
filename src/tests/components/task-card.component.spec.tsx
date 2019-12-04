import { ITaskCardProps, TaskCard } from "../../components/task-card";
import { shallow } from 'enzyme';
import * as React from 'react';
import { Card, Label } from "semantic-ui-react";

describe('Task Detail - Component', () => {
  let props: ITaskCardProps;
  
  beforeEach(() => {
    props = {
      onTaskClick: () => null,
      id: 1,
      completed: false,
      description: 'example',
      storyPoints: 5,
      title: 'Example 1',
      user: null,
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <TaskCard
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(Card)
        .at(0)
        .props()['className']
    ).toBe('task-card');

    expect(
      wrap
        .find(Card.Header)
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.title);

    expect(
      wrap
        .find(Label)
        .at(0)
        .props()['circular']
    ).toBe(true);

    expect(
      wrap
        .find(Label)
        .at(0)
        .props()['color']
    ).toBe('red');

    expect(
      wrap
        .find(Label)
        .at(0)
        .childAt(0)
        .text()
    ).toBe(`${props.storyPoints}`);

    expect(
      wrap
        .find(Card.Description)
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.description);
  });

  it('Should have green colour when completed', () => {
    props.completed = true;

    const wrap = shallow(
      <TaskCard
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(Card)
        .at(0)
        .props()['color']
    ).toBe('green');
  });

  it('Should emit click event', () => {
    const wrap = shallow(
      <TaskCard
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    wrap.simulate('click');
  });
});