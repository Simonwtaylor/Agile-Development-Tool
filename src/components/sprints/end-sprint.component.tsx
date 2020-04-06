import * as React from 'react';
import { Popup, Icon } from 'semantic-ui-react';

export interface IEndSprintProps {
  onEndSprintClick: () => void;
}
 
const EndSprint: React.FC<IEndSprintProps> = ({
  onEndSprintClick,
}) => {

  const handleEndSprintClick = () => {
    onEndSprintClick();
  };

  return (
    <Popup
      content={'End sprint'}
      key={`endsprintpopup`}
      trigger={
        <Icon
          color={'blue'}
          name={'check circle outline'}
          style={{
            cursor: 'pointer',
            marginTop: '5px'
          }}
          onClick={handleEndSprintClick}
        />
      }
    />
  );
}
 
export default EndSprint;