import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


function NosCuisines() {
    return (
        <>
            <Container>
                <Row className="justify-content-center ">
                    <Col className='text-center' lg="6">
                        <h1 className="NosCuisines-title" >NOS CUISINES</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Image className="mx-auto d-block" style={{ boxShadow: '0px 2px 5px grey' }} src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col >
                                <a href="../images/slide2.jpeg">gamme 2</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block" style={{ boxShadow: '0px 2px 5px grey' }} src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col >
                                <a href="../images/slide2.jpeg">gamme 2</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block" style={{ boxShadow: '0px 2px 5px grey' }} src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col >
                                <a href="../images/slide2.jpeg">gamme 2</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block" style={{ boxShadow: '0px 2px 5px grey' }} src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col >
                                <a href="../images/slide2.jpeg">gamme 2</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


export default NosCuisines;