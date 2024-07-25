import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Showroom() {
    return (
        <Container >
            <Row className="mt-5 justify-content-center">
                <Col>
                    <h1 className="titles mb-5 text-center">Visitez Notre Showroom</h1>
                </Col>
            </Row>
            <Row className="mx-auto">
                <Col >
                    <Image className="mb-2" src={require("../images/showroom.jpg")} />
                </Col>
                <Col>
                    <Image src={require("../images/showroomMap.jpg")} />
                </Col>
            </Row>
        </Container>
    )
}

export default Showroom