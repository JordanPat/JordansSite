import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink as Link, useLocation } from 'react-router-dom';


const Navigation: React.FC = () => {
    const { pathname } = useLocation();

    return(
        <Nav className="justify-content-center" activeKey={pathname} variant="tabs">
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
