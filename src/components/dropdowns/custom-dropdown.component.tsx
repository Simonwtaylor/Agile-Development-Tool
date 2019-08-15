import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

export interface ICustomDropdownProps {
  items: any[];
  onSelectItem: any;
  selectedItem?: any;
  name: string;
}
 
class CustomDropdown extends React.Component<ICustomDropdownProps> {
  constructor(props: any){
    super(props);
  }

  // @ts-ignore
  handleSelectChange = (e: any, data: any) => {
    const {
      onSelectItem,
      name
    } = this.props;

    onSelectItem({
      name, 
      value: data.value
    })
  }

  render() {
    const {
      items,
      selectedItem,
    } = this.props;

    return (
      <Dropdown 
        fluid
        search
        selection
        options={items}
        value={selectedItem}
        onChange={this.handleSelectChange}
      />
    )
  }
}
 
export default CustomDropdown;