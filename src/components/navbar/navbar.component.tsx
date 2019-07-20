import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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
          Collab
        </Menu.Item>
      </Link>
      <Menu.Item
        as={ Link }
        to='board'
        name='board'
        active={activeItem === 'board'}
        onClick={() => onItemClick('board')}
        >
        Board
      </Menu.Item>
      {!user && <Menu.Item 
        as={ Link }
        to='login'
        name='sign-in' 
        active={activeItem === 'sign-in'} 
        onClick={() => onItemClick('sign-in')}>
        Login
      </Menu.Item>}
      {user && <Menu.Item 
        as={ Link }
        to='logout'
        name='logout' 
        active={activeItem === 'logout'} 
        onClick={() => onItemClick('logout')}>
        Logout
      </Menu.Item>}
      {user && <Menu.Item 
        as={ Link }
        to='user'
        name='user' 
        active={activeItem === 'user'} 
        onClick={() => onItemClick('user')}>
          <img 
            width={25} 
            height={25} 
            src={user.photoURL}
            style={{borderRadius: 50}} 
          />
      </Menu.Item>}
    </Menu>
  );
}
 
export default Navbar;