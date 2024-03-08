import React, {} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {NavLink as Link} from 'react-router-dom';


const Navigation: React.FC = () => {

    return(
        <Nav className="justify-content-center" activeKey="/pages/Home" variant="tabs">
            <NavItem>
                <Link to="/pages/Home" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/pages/CV" className="nav-link">Resume</Link>
            </NavItem>
            <NavItem>
                <Link to="/pages/Contact" className="nav-link">Contact</Link>
            </NavItem>
        </Nav>
    );
}

export default Navigation;