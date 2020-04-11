import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarComponent = React.memo(() => {
    return (
        <Navbar className="fixed-top" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand">BenTrinh</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default NavBarComponent;