import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';



function Formulaire() {
    // const [country, setCountry] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState('');



    // useEffect(() => {
    //     fetch("https://api.countrystatecity.in/v1/countries", {
    //         method: "GET",
    //         headers: {
    //             'X-CSCAPI-KEY': 'UGVvWldnYmlhUU9tTnNJWjVxOTJCMkdqRmR1N3pyR0RjNElMUmowYw=='
    //         },
    //         redirect: 'follow'
    //     })
    //         .then(response => response.json())
    //         .then(data => setCountry.data)
    //         .catch(error => console.error('Error fetching countries:', error));
    // }, []);





    // return (
    //     <div>
    //         <h2 className='d-flex justify-content-center p-4 mt-4'>Envoyez nous une demande de consultation</h2>
    //         <Form>
    //             <Container>
    //                 <Row xs="auto" md="auto" lg="auto">
    //                     <Col className='' >
    //                         <Form.Control placeholder="Nom" />
    //                     </Col>
    //                     <Col className='p-0'>
    //                         <Form.Control placeholder="Prenom" />
    //                     </Col>
    //                     <Col className='country'>
    //                         <Form.Group as={Col} controlId="formGridState" >
    //                             <Form.Select defaultValue="Choose..." onChange={(e) => setSelectedCountry(e.target.value)}>
    //                                 <option>Pays</option>
    //                                 {country.map(country => (
    //                                     <option key={country.id} value={country.name}>{country.name}</option>
    //                                 ))}
    //                             </Form.Select>
    //                         </Form.Group></Col>
    //                     <Col className='city p-0'>
    //                         <Form.Group as={Col} controlId="formGridState" >
    //                             <Form.Select defaultValue="Choose...">
    //                                 <option>Ville</option>
    //                             </Form.Select>
    //                         </Form.Group>
    //                     </Col>
    //                     <Col className=''>
    //                         <Form.Group className="mb-3" controlId="formBasicEmail">
    //                             <Form.Control type="email" placeholder="Email" />
    //                             <div id="passwordHelpBlock" class="form-text">Optionnel</div>
    //                         </Form.Group>
    //                     </Col>
    //                     <Col className='p-0'>
    //                         <Form.Group as={Col} controlId="formGridState" >
    //                             <Form.Select defaultValue="Choose...">
    //                                 <option>Telephone</option>
    //                             </Form.Select>
    //                         </Form.Group>
    //                     </Col>

    //                     <Col>
    //                         <Button variant="primary" type="submit" style={{ backgroundColor: "rgba(255, 188, 16, 1)", color: "black", border: "1px solid rgba(206, 206, 206, 1)" }}>
    //                             Consulter
    //                         </Button>
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </Form >
    //     </div>
    // );

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("https://api.countrystatecity.in/v1/countries", {
            method: "GET",
            headers: {
                'X-CSCAPI-KEY': 'UGVvWldnYmlhUU9tTnNJWjVxOTJCMkdqRmR1N3pyR0RjNElMUmowYw=='
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    useEffect(() => {
        // Fetch cities when selectedCountry changes
        if (selectedCountry) {
            fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/cities`, {
                method: "GET",
                headers: {
                    'X-CSCAPI-KEY': 'UGVvWldnYmlhUU9tTnNJWjVxOTJCMkdqRmR1N3pyR0RjNElMUmowYw=='
                },
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(data => setCities(data))
                .catch(error => console.error('Error fetching cities:', error));
        }
    }, [selectedCountry]);

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
                                <Form.Select defaultValue="Choose..." onChange={(e) => setSelectedCountry(e.target.value)}>
                                    <option value="">Pays</option>
                                    {countries.map(country => (
                                        <option key={country.id} value={country.name}>{country.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col className='city p-0'>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose..." >
                                    <option value="">Ville</option>
                                    {cities.map(city => (
                                        <option key={city.id} value={city.id}>{city.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col className=''>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                                <div id="passwordHelpBlock" className="form-text">Optionnel</div>
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
