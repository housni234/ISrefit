import React from "react";
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
                <Image className="logo" src={require("/Users/housni/Desktop/Projects/ISrefit/src/images/isRefit.jpeg")} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="bar">
                    <Nav className="mx-auto mt-auto" >
                        <Row>
                            <Col md="auto">
                                <Nav.Link href="#home" className="Navlink">NOS CUISINES</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link" className="Navlink">QUI SOMME-NOUS</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link" className="Navlink">CONTACTEZ NOUS</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link" className="Navlink">NOS CLIENTS</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link" className="Navlink">SHOWROOM</Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="#link" className="Navlink">FAQs</Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;