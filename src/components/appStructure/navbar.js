import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>XB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to='/home' style={{color: '#fff'}}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/about' style={{color: '#fff'}}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/content' style={{color: '#fff'}}>Content</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/login' style={{color: '#fff'}}>Login</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
