import React, {useState} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import {NavLink as Link} from 'react-router-dom';


const Navigation: React.FC = () => {
    const [active, setIsActive] = useState("is-active");
    const handleClick = () => {

    }

    return(
        <Nav className="justify-content-center" activeKey="/home" variant="tabs">
            <NavItem>
                <Link to="/pages/home" className="nav-link" activeClassName="active">Home</Link>
            </NavItem>
            <NavItem>
            </NavItem>
                <Link to="/pages/CV" className="nav-link" activeClassName="active">Resume</Link>
            <NavItem>
                <Link to="/pages/Contact" className="nav-link" activeClassName="active">Contact</Link>
            </NavItem>
        </Nav>
    );
}

export default Navigation;