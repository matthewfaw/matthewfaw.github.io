import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavItemInstance from './NavItemInstance';

const NavBar = ({ title, items }) => (
    <Navbar >
        <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>{title}</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            {items.map( (item, index) => 
                    <NavItemInstance 
                        key={index}
                        to={{ pathname: item.pathname }} 
                        text={item.text} 
                    />
            )}
        </Nav>
    </Navbar>
)

export default NavBar;
