import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <Navbar bg="dark" variant='dark' expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        </header>
    );
};

export default Header;