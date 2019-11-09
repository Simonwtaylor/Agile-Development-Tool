import * as React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from '../../components/custom-button';
import { Button } from 'semantic-ui-react';

describe('Custom Button - Component', () => {
  let props: any;

  beforeEach(() => {
    props = {
      color: 'green'
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <CustomButton
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    console.log(wrap.debug());

    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['className']
    ).toBe('custom-button');

    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['color']
    ).toBe(props.color);

    expect(
      wrap
        .find(Button)
        .at(0)
        .props()['as']
    ).toBe('button');
  });
});