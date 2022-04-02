import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../Images/8361508-36dd12e3dd7017d51af8319ff8ffb996-medium_jpg.jpg";
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <div className='container'>
                    <img className='logo mx-3' src={logo} alt="" />
                    <Navbar.Brand href="#home">FeetWings</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/products">Our Products</Link>
                            <Link className='nav-link' to="/insights">Insights</Link>
                            <Link className='nav-link' to="/smartyarn">Smart Yarn</Link>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;