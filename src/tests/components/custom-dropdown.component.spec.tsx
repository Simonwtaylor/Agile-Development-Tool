import * as React from 'react';
import { ICustomDropdownProps, CustomDropdown } from '../../components/dropdowns';
import { shallow, mount } from 'enzyme';
import { Dropdown } from 'semantic-ui-react';

describe('Custom Dropdown - Component', () => {
  let props: ICustomDropdownProps;

  beforeEach(() => {
    props = {
      items: [],
      name: 'Example',
      onSelectItem: (item: any) => console.log(item),
      selectedItem: null,
    };
  });

  it('Should render properly', () => {
    const wrap = shallow(
      <CustomDropdown
        {...props}
      />
    );

    expect(
      wrap
    ).not.toBeNull();

    expect(
      wrap
        .find(Dropdown)
        .at(0)
        .props()['fluid']
    ).toBe(true);

    expect(
      wrap
        .find(Dropdown)
        .at(0)
        .props()['search']
    ).toBe(true);

    expect(
      wrap
        .find(Dropdown)
        .at(0)
        .props()['selection']
    ).toBe(true);

    expect(
      wrap
        .find(Dropdown)
        .at(0)
        .props()['options']
    ).toBe(props.items);

    expect(
      wrap
        .find(Dropdown)
        .at(0)
        .props()['value']
    ).toBe(props.selectedItem);
  });

  it('Should handle change properly', () => {

    props.items = [
      {
        key: '1', 
        value: '1', 
        text: 'Value 1'
      }
    ];

    const wrap = mount(
      <CustomDropdown
        {...props}
      />
    );
    
    expect(
      wrap
    ).not.toBeNull();

    wrap
      .find(Dropdown)
      .at(0)
      .simulate('change',{target: { value : '1'}});
  });
});