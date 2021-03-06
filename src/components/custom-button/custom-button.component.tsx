import * as React from 'react';
import { Button, ButtonProps } from 'semantic-ui-react';

export interface ICustomButtonProps extends ButtonProps {

}

const CustomButton: React.FC<ICustomButtonProps> = ({
    children, 
    color,
    ...otherProps
}) => {
  return (
    <Button
      className='custom-button'
      color={(color) ? color : 'blue'}
      {...otherProps}
    >
      {children}
    </Button>
  );
}

export default CustomButton;