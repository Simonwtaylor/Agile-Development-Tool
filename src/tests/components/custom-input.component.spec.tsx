import * as React from 'react';
import { shallow } from 'enzyme';
import { CustomInput } from '../../components/custom-input';
import { Input } from 'semantic-ui-react';

describe('Custom Input - Component', () => {
  let props: any;

  beforeEach(() => {
    props = {
      handleChange: () => null, 
      label: 'Example',
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <CustomInput
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
    ).toBe('group');

    expect(
      wrap
        .find(Input)
        .at(0)
        .props()['className']
    ).toBe('form-input');

    expect(
      wrap
        .find(Input)
        .at(0)
        .props()['placeholder']
    ).toBe(props.label);

    expect(
      wrap
        .find(Input)
        .at(0)
        .props()['type']
    ).toBe('text');
  });
});