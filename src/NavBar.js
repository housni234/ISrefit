import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">NOS CUISINES</Nav.Link>
                        <Nav.Link href="#link">QUI SOMME-NOUS</Nav.Link>
                        <Nav.Link href="#link">CONTACTEZ NOUS</Nav.Link>
                        <Nav.Link href="#link">NOS CLIENTS</Nav.Link>
                        <Nav.Link href="#link">SHOWROOM</Nav.Link>
                        <Nav.Link href="#link">FAQs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;