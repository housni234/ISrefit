import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

function NosClients() {
    //  data for cards
    const clients = [
        { id: 1, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },
        { id: 2, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },
        { id: 3, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },
        { id: 4, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },
        { id: 5, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },
        { id: 6, name: "Housni Alami", imgSrc: require("../images/stars.jpg"), text: "honrfonefono oi o oowoue oerh iug  ywg iwg  wiur giweur  piwuriuwe r weiuyrpiuwy iuuwy iuwyrpouwy thwkfsg  kh hoehr;ewh rohkrjhf herklherkjgherkg erk kwhkjfhg kjh ewkhrflk wejh kwejh weh" },

    ];

    const intialVisibleCardsState = 3;
    const [visibleCards, setVisibleCards] = useState(intialVisibleCardsState);

   

    const loadMore = () => {
        setVisibleCards((preVisibleCards) => preVisibleCards + 3);
    }

    const showLess = () => {
        setVisibleCards(intialVisibleCardsState)
    }


    return (
        <Container >
            <Row className="justify-content-center mt-5">
                <Col className='text-center mt-5'>
                    <h1 className="titles mt-5">NOS CLIENTS</h1>
                </Col>
            </Row>
            <Row className="cards-row" >
                {clients.slice(0, visibleCards).map((client) => (
                    <Col className="mx-auto d-block m-4 b-4 " lg="4">
                        <Card className="card" >
                            <div className="d-flex justify-content-center m-2">
                                <Image src={client.imgSrc} className="stars" />
                            </div>
                            <Card.Title className=" m-2 card-title">
                                {client.name}
                            </Card.Title>
                            <Card.Text className="m-4 card-text">
                                {client.text}
                            </Card.Text>
                        </Card>
                    </Col>
                ))}
                <Row className="justify-content-center">
                    {visibleCards < clients.length && (
                        <Button onClick={loadMore} className="mb-2 button">Load More</Button>
                    )}
                    {visibleCards > intialVisibleCardsState && (
                        <Button onClick={showLess} className="mb-2 ml-2 button">Show Less</Button>
                    )}
                </Row>
            </Row>
        </Container>
    )
}

export default NosClients