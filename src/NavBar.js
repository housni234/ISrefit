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
            <Container fluid>
                <Row>
                    <Col >
                        <Image className="logo" src="holder.js/171x180" thumbnail />
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Col xs={3}>
                                <Nav.Link href="#home">NOS CUISINES</Nav.Link>
                            </Col>
                            <Col xs={3}>
                                <Nav.Link href="#link">QUI SOMME-NOUS</Nav.Link>
                            </Col>
                            <Col xs={3}>
                                <Nav.Link href="#link">CONTACTEZ NOUS</Nav.Link>
                            </Col>
                            <Col xs={3}>
                                <Nav.Link href="#link">NOS CLIENTS</Nav.Link>
                            </Col>
                            <Col xs={3}>
                                <Nav.Link href="#link">SHOWROOM</Nav.Link>
                            </Col>
                            <Nav.Link href="#link">FAQs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavBar;