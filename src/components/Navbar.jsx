import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';



function BasicExample() {
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">Blog-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About US</Nav.Link>
            <Nav.Link href="/article">Articles</Nav.Link>
            <Nav.Link href="/articlelist">Article List</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;