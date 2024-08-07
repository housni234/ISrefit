import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


function NosCuisines() {
    return (
        <>
            <Container >
                <Row className="justify-content-center ">
                    <Col className='text-center' lg="6">
                        <h1 className="titles" >NOS CUISINES</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Image className="mx-auto d-block gammeImg" src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col  >
                                <a className="pdf-link" href="../images/slide2.jpeg" download>gamme 1</a>
                                <p className="mx-auto w-75"> ie inf  oejnf i iuhe ifuhwekj h hoiuh enfiu ho eiu iuwehf ieh iu hiuwehd ieh iu hieuwh iheihe ihf ew iuheiu </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block gammeImg" src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col  >
                                <a className="pdf-link" href="../images/slide2.jpeg">gamme 2</a>
                                <p className="mx-auto w-75"> ie inf  oejnf i iuhe ifuhwekj h hoiuh enfiu ho eiu iuwehf ieh iu hiuwehd ieh iu hieuwh iheihe ihf ew iuheiu </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block gammeImg" src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col  >
                                <a className="pdf-link" href="../images/slide2.jpeg">gamme 3</a>
                                <p className="mx-auto w-75"> ie inf  oejnf i iuhe ifuhwekj h hoiuh enfiu ho eiu iuwehf ieh iu hiuwehd ieh iu hieuwh iheihe ihf ew iuheiu </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <Image className="mx-auto d-block gammeImg" src={require("../images/gamme.jpg")} rounded />
                        <Row className="justify-content-center mt-2">
                            <Col  >
                                <a className="pdf-link" href="../images/slide2.jpeg">gamme 4</a>
                                <p className="mx-auto w-75"> ie inf  oejnf i iuhe ifuhwekj h hoiuh enfiu ho eiu iuwehf ieh iu hiuwehd ieh iu hieuwh iheihe ihf ew iuheiu </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )

}


export default NosCuisines;