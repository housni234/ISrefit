import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';



function Formulaire() {
    const countries = [
        { id: '1', name: 'USA' },
        { id: '2', name: 'SPAIN' }
    ]

    const [country, SetCountry] = useState([])

    useEffect(() => { SetCountry(countries) }, [])


    return (
        <div>
            <h2 className='d-flex justify-content-center p-4 mt-4'>Envoyez nous une demande de consultation</h2>
            <Form>
                <Container>
                    <Row xs="auto" md="auto" lg="auto">
                        <Col className='' >
                            <Form.Control placeholder="Nom" />
                        </Col>
                        <Col className='p-0'>
                            <Form.Control placeholder="Prenom" />
                        </Col>
                        <Col className=''>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose...">
                                    <option>Pays</option>
                                    {
                                        country &&
                                            country !== undefined ?
                                            country.map((ctr, index) => {
                                                return (
                                                    <option key={index} value={ctr.id}>{ctr.name}</option>
                                                )
                                            })
                                            : "No Country"

                                    }
                                </Form.Select>
                            </Form.Group></Col>
                        <Col className='p-0'>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose...">
                                    <option>Ville</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col className=''>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                                <div id="passwordHelpBlock" class="form-text">Optionnel</div>
                            </Form.Group>
                        </Col>
                        <Col className='p-0'>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose...">
                                    <option>Telephone</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Button variant="primary" type="submit" style={{ backgroundColor: "rgba(255, 188, 16, 1)", color: "black", border: "1px solid rgba(206, 206, 206, 1)" }}>
                                Consulter
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form >
        </div>
    );
}

export default Formulaire;
