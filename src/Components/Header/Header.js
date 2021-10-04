import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Moon Yoga</Navbar.Brand>
                    <Nav className="mr-auto menu-list">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/trainer">Trainers</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;