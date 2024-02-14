import React from "react";
import "./App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Image className="logo" src="holder.js/171x180" thumbnail />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Row >
                            <Col md="auto">
                                <Nav.Link href="#home">NOS CUISINES</Nav.Link>
                            </Col>
                            <Col md="auto" >
                                <Nav.Link href="#link">QUI SOMME-NOUS</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link">CONTACTEZ NOUS</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link">NOS CLIENTS</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#link">SHOWROOM</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#link">FAQs</Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;