import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function NosClients() {
    return (<>
        <Container >
            <Row className="justify-content-center mt-5">
                <Col className='text-center mt-5'>
                    <h1 className="titles mt-5">NOS CLIENTS</h1>
                </Col>
            </Row>
            <Row className="cards-row" >
                <Col className="mx-auto d-block m-4 b-4 " lg="3">
                    <Card className="card" >
                        <div className="d-flex justify-content-center m-2">
                            <Image src={require("../images/stars.jpg")} className="stars" />
                        </div>
                        <Card.Title className=" m-2 card-title">
                            Housni Alami
                        </Card.Title>
                        <Card.Text className="p-3">
                            honrfonefono oi o oowoue   oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyr
                            pouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh
                        </Card.Text>
                    </Card>
                </Col>
                <Col className="mx-auto d-block m-4" lg="3">
                    <Card className="card">
                        <div className="d-flex justify-content-center m-2">
                            <Image src={require("../images/stars.jpg")} className="stars" />
                        </div>
                        <Card.Title className="m-2 card-title">
                            Housni Alami
                        </Card.Title>
                        <Card.Text className="p-3">
                            honrfonefono honrfonefono oi o oowoue   oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyr
                            pouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh
                        </Card.Text>
                    </Card>
                </Col>
                <Col className="mx-auto d-block m-4" lg="3">
                    <Card className="card">
                        <div className="d-flex justify-content-center m-2">
                            <Image src={require("../images/stars.jpg")} className="stars" />
                        </div>
                        <Card.Title className="m-2 card-title">
                            Housni Alami
                        </Card.Title>
                        <Card.Text className="p-3">
                            honrfonefono honrfonefono oi o oowoue   oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyr
                            pouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>

    </>
    )
}

export default NosClients