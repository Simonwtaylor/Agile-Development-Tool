import * as React from 'react';
import { Button } from 'semantic-ui-react';

const CustomButton: React.FC<any> = 
  ({
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