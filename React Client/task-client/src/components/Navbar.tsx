import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export interface NavbarProps {
    
}
 
const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">Collab</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/board">Board</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login / Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;