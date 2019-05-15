import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export interface NavbarProps {
    activeItem: string,
    handleItemClick: any
}
 


const Navbar: React.SFC<NavbarProps> = ({activeItem, handleItemClick}) => {
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
            <Menu.Item
                as={ Link }
                to='chat'
                name='chat'
                active={activeItem === 'chat'}
                onClick={() => onItemClick('chat')}
                >
                Chat
            </Menu.Item>
            <Menu.Item 
                as={ Link }
                to='login'
                name='sign-in' 
                active={activeItem === 'sign-in'} 
                onClick={() => onItemClick('sign-in')}>
                Login
            </Menu.Item>
        </Menu>
    );
}
 
export default Navbar;