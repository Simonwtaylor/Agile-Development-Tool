import * as React from 'react';
import { IMemberCardProps, MemberCard } from '../../components/member-card';
import { shallow } from 'enzyme';
import { Card, Label, Button } from 'semantic-ui-react';

describe('Member Card - Component', () => {
  let props: IMemberCardProps;

  beforeEach(() => {
    props = {
      color: 'red',
      currentlyOn: 'Testing',
      displayName: 'Coder',
      role: 'React Dev',
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

    // Label
    expect(
      wrap
        .find(Label)
        .at(0)
        .props()['className']
    ).toBe('status-label');

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
    ).toBe(props.color);

    expect(
      wrap
        .find(Label)
        .at(0)
        .props()['empty']
    ).toBe(true);

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
    ).toBe('Currently On:');

    expect(
      wrap
        .find(Card.Description)
        .at(0)
        .find('a')
        .at(0)
        .props()['href']
    ).toBe('/team');

    expect(
      wrap
        .find(Card.Description)
        .at(0)
        .find('a')
        .at(0)
        .childAt(0)
        .text()
    ).toBe(props.currentlyOn);

    // Extra
    expect(
      wrap
        .find('div')
        .at(0)
        .props()['className']
    ).toBe('ui two buttons');

    // Message Button
    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['basic']
    ).toBe(true);

    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['color']
    ).toBe('blue');

    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['size']
    ).toBe('small');

    expect(
      wrap
        .find(Button)
        .at(0)
        .find('span')
        .at(0)
        .props()['role']
    ).toBe('img');

    expect(
      wrap
        .find(Button)
        .at(0)
        .find('span')
        .at(0)
        .props()['aria-label']
    ).toBe('msg');

    expect(
      wrap
        .find(Button)
        .at(0)
        .childAt(1)
        .text()
    ).toBe(' Chat');

    // Activity Button
    expect(
      wrap
        .find(Button)
        .at(1)
        .props()['basic']
    ).toBe(true);

    expect(
      wrap
        .find(Button)
        .at(1)
        .props()['color']
    ).toBe('purple');

    expect(
      wrap
        .find(Button)
        .at(1)
        .props()['size']
    ).toBe('small');

    expect(
      wrap
        .find(Button)
        .at(1)
        .find('span')
        .at(0)
        .props()['role']
    ).toBe('img');

    expect(
      wrap
        .find(Button)
        .at(1)
        .find('span')
        .at(0)
        .props()['aria-label']
    ).toBe('activity');

    expect(
      wrap
        .find(Button)
        .at(1)
        .childAt(1)
        .text()
    ).toBe(' Activity');
  });
});