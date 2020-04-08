import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

export interface ICustomDropdownProps {
  items: any[];
  onSelectItem: any;
  selectedItem?: any;
  name: string;
  placeholder?: string;
}
 
class CustomDropdown extends React.Component<ICustomDropdownProps> {
  // @ts-ignore
  handleSelectChange = (e: any, data: any) => {
    const {
      onSelectItem,
      name
    } = this.props;

    onSelectItem({
      name, 
      value: data.value
    });
  }

  render() {
    const {
      items,
      selectedItem,
      placeholder,
    } = this.props;

    return (
      <Dropdown 
        fluid
        search
        selection
        options={items}
        value={selectedItem}
        onChange={this.handleSelectChange}
        placeholder={placeholder}
      />
    )
  }
}
 
export default CustomDropdown;