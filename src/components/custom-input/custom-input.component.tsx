import * as React from 'react';
import { Input, InputProps, InputOnChangeData } from 'semantic-ui-react';

export interface ICustomInputProps extends InputProps {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  handleChange, 
  label,
  ...otherProps
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