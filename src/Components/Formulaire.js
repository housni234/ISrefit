import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Formulaire() {
    return (
        <Form>
            <h2 className='d-flex justify-content-center'>Envoyez nous une demande de consultation</h2>
            <Container>
                <Row xs="auto" md="auto" lg="auto">
                    <Col >
                        <Form.Control placeholder="Nom" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Prenom" />
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Select defaultValue="Choose...">
                                <option>Pays</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group></Col>
                    <Col>
                        <Col>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose...">
                                    <option>Ville</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group></Col>
                        <Col></Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Formulaire;
