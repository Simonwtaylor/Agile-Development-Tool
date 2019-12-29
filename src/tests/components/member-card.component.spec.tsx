import * as React from 'react';
import { IMemberCardProps, MemberCard } from '../../components/member-card';
import { shallow } from 'enzyme';
import { Card } from 'semantic-ui-react';

describe('Member Card - Component', () => {
  let props: IMemberCardProps;

  beforeEach(() => {
    props = {
      id: 1,
      color: 'red',
      currentTask: null,
      displayName: 'Coder',
      role: 'React Dev',
      onRemoveUserFromTeam: (id) => console.log(id),
      onSetCurrentTask: (id) => console.log(id)
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <MemberCard
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

    // Header
    expect(
      wrap
        .find(Card.Header)
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.displayName);

    // Meta
    expect(
      wrap
        .find(Card.Meta)
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.role);

    // Description
    expect(
      wrap
        .find(Card.Description)
        .at(0)
        .childAt(0)
        .text()
    ).toContain('Nothing to do');

    expect(
      wrap
        .find(Card.Description)
        .at(0)
        .find('button')
        .at(0)
        .childAt(0)
        .text()
    ).toBe('Change that');

  });

  // TODO: Add test for a user with a current task
});