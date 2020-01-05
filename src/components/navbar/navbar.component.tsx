import * as React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';
import { connect } from 'react-redux';
import { Menu, Label } from 'semantic-ui-react';
import { INotificationStore } from '../../lib/types';

export interface INavbarProps {
  activeItem: string;
  handleItemClick: (name: string) => void;
  user?: any;
  notifications?: INotificationStore;
}

const Navbar: React.FC<INavbarProps> = ({
    activeItem, 
    handleItemClick,
    user,
    notifications,
}) => {

  const onItemClick = (name: string) => {
    handleItemClick(name);
  };

  return (
    <Menu stackable>
      <Link to='/'>
        <Menu.Item>
          <span role="img" aria-label="rocket">🚀</span>
        </Menu.Item>
      </Link>
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
          {(notifications && notifications.outstandingUnread && 
            <Label corner="right" circular color={'red'} empty key={'red'} />
          )}
      </Menu.Item>}
    </Menu>
  );
}
 
const mapStateToProps = (store: any) => ({
  user: store.user.currentUser,
  notifications: store.notifications,
});

export default connect(mapStateToProps)(Navbar);