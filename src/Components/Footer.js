import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col lg="2">
                    <h5 className="contact-us mt-3">CONTACT US</h5>
                    <h6 className="mt-2">615980905</h6>
                    <h6>Zenkat Ibourk El Idrissi, Souabi, 22, Mabrooka, Casablanca</h6>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;