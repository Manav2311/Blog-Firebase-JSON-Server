import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <Navbar expand="lg" className="custom-header" sticky="top">
            <Container>
                <Navbar.Brand className="brand-title">Blogs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-buttons">
                        <Link to="/" className="nav-link-btn">
                            <Button variant="outline-light">Home</Button>
                        </Link>
                        <Link to="/addBlog" className="nav-link-btn">
                            <Button variant="light">Add Blog</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
