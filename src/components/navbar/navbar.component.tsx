import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Label } from 'semantic-ui-react';
import './navbar.styles.scss';

export interface INavbarProps {
    activeItem: string,
    handleItemClick: any,
    user: any
}

const Navbar: React.FC<INavbarProps> = 
  ({
    activeItem, 
    handleItemClick,
    user
  }) => {

  const onItemClick = (name: string) => {
    handleItemClick(name);
  }

  return (
    <Menu stackable>
      <Link to='/'>
        <Menu.Item>
          🚀
        </Menu.Item>
      </Link>
      <Menu.Item
        as={ Link }
        to='board'
        name='board'
        active={activeItem === 'board'}
        onClick={() => onItemClick('board')}
        >
        📅
        Plan it
      </Menu.Item>
      <Menu.Item
        as={ Link }
        to='team'
        name='team'
        active={activeItem === 'team'}
        onClick={() => onItemClick('team')}
        >
        🙌 The Squad
      </Menu.Item>
      {!user && <Menu.Item 
        as={ Link }
        to='login'
        name='sign-in' 
        active={activeItem === 'sign-in'} 
        onClick={() => onItemClick('sign-in')}>
        🔐 Login
      </Menu.Item>}
      {user && <Menu.Item 
        as={ Link }
        to='user'
        name='user' 
        icon
        active={activeItem === 'user'} 
        onClick={() => onItemClick('user')}>
          <img 
            width={25} 
            height={25} 
            src={user.photoURL}
            style={{borderRadius: 50}} 
          />
          <Label corner="right" circular color={'red'} empty key={'red'} />
      </Menu.Item>}
    </Menu>
  );
}
 
export default Navbar;