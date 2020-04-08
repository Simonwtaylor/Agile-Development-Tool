import * as React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';
import { useSelector } from 'react-redux';
import { Menu, Label } from 'semantic-ui-react';
import { selectOutstandingUnread } from '../../redux/notifications/notifications.selector';
import { selectCurrentUser } from '../../redux/user';
import { selectCurrentSprint } from '../../redux/sprint/sprint.selector';
import { SprintSelectorContainer } from './';

export interface INavbarProps {
  activeItem: string;
  handleItemClick: (name: string) => void;
}

const Navbar: React.FC<INavbarProps> = ({
    activeItem, 
    handleItemClick,
}) => {
  const outstandingUnread = useSelector(selectOutstandingUnread);
  const user = useSelector(selectCurrentUser);
  const currentSprint = useSelector(selectCurrentSprint);

  const onItemClick = (name: string) => {
    handleItemClick(name);
  };

  return (
    <Menu stackable className={'navbar'}>
        <Menu.Item
          as={ Link }
          to='/sprint'
          name='sprint'
          onClick={() => onItemClick('sprint')}
        >
          <span role="img" aria-label="rocket">🚀</span>
        </Menu.Item>
      {user && <>
        <Menu.Item
          as={ Link }
          to='/sprint'
          name='sprint'
          active={activeItem === 'sprint'}
          onClick={() => onItemClick('sprint')}
        >
          <span role="img" aria-label="cal">📅</span>
          Plan it
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/team'
          name='team'
          active={activeItem === 'team'}
          onClick={() => onItemClick('team')}
        >
          <span role="img" aria-label="hands">🙌</span> The Squad
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/backlog'
          name='backlog'
          active={activeItem === 'backlog'}
          onClick={() => onItemClick('backlog')}
        >
          <span role="img" aria-label="backlog">💡</span> Future Stuff
        </Menu.Item>
        <Menu.Item
          to=''
        >
          <div className={'sprint dropdown'}>
            <SprintSelectorContainer
              currentSprint={currentSprint}
              addNewSprint={false}
            />
          </div>
        </Menu.Item>
      </>}
      {!user && <Menu.Item 
        as={ Link }
        to='/login'
        name='sign-in' 
        active={activeItem === 'sign-in'} 
        onClick={() => onItemClick('sign-in')}>
        <span role="img" aria-label="locks">🔐</span> Login
      </Menu.Item>}
      {user && <Menu.Item 
        as={ Link }
        to='/user'
        name='user' 
        icon
        active={activeItem === 'user'} 
        onClick={() => onItemClick('user')}>
          <img 
            width={25} 
            height={25} 
            src={user.photoURL}
            style={{borderRadius: 50}} 
            alt="prof"
          />
          {(outstandingUnread && 
            <Label corner="right" circular color={'red'} empty key={'red'} />
          )}
      </Menu.Item>}
    </Menu>
  );
}

export default Navbar;