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
                <Image className="logo" src="holder.js/171x180" thumbnail />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" >
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
        // <Container fluid>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Image className="logo" src="holder.js/171x180" thumbnail />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto" >
        //             <Row className="justify-content-md-center">
        //                 <Col md="auto">
        //                     1 of 3
        //                 </Col>
        //                 <Col md="auto">Var</Col>
        //                 <Col md="auto">
        //                     3 of 3
        //                 </Col>
        //                 <Col md="auto">1 of 3</Col>
        //                 <Col md="auto">Vari</Col>
        //                 <Col md="auto">
        //                     3 of 3
        //                 </Col>
        //             </Row>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Container >
    );
}

export default NavBar;