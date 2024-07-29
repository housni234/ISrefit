import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function SocialMedia() {
    return (
        <Container className="social-media">
            <Row className="justify-content-center">
                <Col>
                    <h1 className="titles text-center ">Nos dernière nouveauté sur</h1>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col >
                    <h5 className="text-center">Instagram</h5>
                    <Image alt="" href="" className="mx-auto d-block" src={(require("../images/insta.jpg"))} />
                </Col>
                <Col>
                    <h5 className="text-center">Facebook</h5>
                    <Image alt="" href="" className="mx-auto d-block" src={(require("../images/facebook.jpg"))} />
                </Col>
                <Col>
                    <h5 className="text-center">Tiktok</h5>
                    <Image alt="" href="" className="mx-auto d-block" src={(require("../images/tiktok.jpg"))} />
                </Col>
            </Row>
        </Container>
    )
}
export default SocialMedia;