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
                        </Nav>
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/job">Job</Link>
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