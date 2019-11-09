import { ITaskCardProps, TaskCard } from "../../components/task-card";
import { shallow } from 'enzyme';
import * as React from 'react';
import { Card } from "semantic-ui-react";

describe('Task Detail - Component', () => {
  let props: ITaskCardProps;
  
  beforeEach(() => {
    props = {
      onTaskClick: () => null,
      _id: '11231',
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

    console.log(
      wrap.debug()
    )

    expect(
      wrap
        .find(Card)
        .at(0)
        .props()['className']
    ).toBe('task-card');
  });
});