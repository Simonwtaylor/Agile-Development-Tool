import * as React from 'react';
import { Input } from 'semantic-ui-react';

const CustomInput: React.FC<any> = ({
  handleChange, 
  label,
  ...otherProps,
}) => {
  return (
    <div className="group">
      <Input 
        className='form-input'
        onChange={handleChange}
        placeholder={label}
        {...otherProps}
      />
    </div>
  );
};
 
export default CustomInput;