import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useEffect, useState } from 'react';


/// fetching countries and cities
function Formulaire() {

    // const [countries, setCountries] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [cities, setCities] = useState([]);


    // // fetch countries
    // useEffect(() => {
    //     fetch("https://api.countrystatecity.in/v1/countries", {
    //         method: "GET",
    //         headers: {
    //             'X-CSCAPI-KEY': 'UGVvWldnYmlhUU9tTnNJWjVxOTJCMkdqRmR1N3pyR0RjNElMUmowYw=='
    //         },
    //         redirect: 'follow'
    //     })
    //         .then(response => response.json())
    //         .then(data => setCountries(data))
    //         .catch(error => console.error('Error fetching countries:', error));
    // }, []);

    // // fetch cities when country is selected 
    // useEffect(() => {
    //     if (selectedCountry) {
    //         fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/cities`, {
    //             method: "GET",
    //             headers: {
    //                 'X-CSCAPI-KEY': 'UGVvWldnYmlhUU9tTnNJWjVxOTJCMkdqRmR1N3pyR0RjNElMUmowYw=='
    //             },
    //             redirect: 'follow'
    //         })
    //             .then(response => response.json())
    //             .then(data => setCities(data))
    //             .catch(error => console.error('Error fetching cities:', error));
    //     }
    // }, [selectedCountry]);

    return (
        <div>
            <h2 className='d-flex justify-content-center mt-5 formulaire-title'>Envoyez nous une demande de consultation</h2>
            <h5 className="d-flex justify-content-center mb-4 formulaire-sub-title">Remplisesez le formulaire, et nous vous contacterons dans les 24 heures</h5>

            <Form action='http://localhost/mail.php' method='POST'>
                <Container fluid>
                    <Row xs='1' md='2' lg='auto' className="justify-content-md-center">
                        <Col className='pb-2'>
                            <Form.Control placeholder="Nom" name='Nom' />
                        </Col>
                        <Col className='pb-2'>
                            <Form.Control placeholder="Prenom" name='Prenom' />
                        </Col>
                        <Col className='pb-2'>
                            <Form.Control placeholder="Pays" name='Pays' />
                        </Col>
                        <Col className='pb-2'>
                            <Form.Control placeholder="Vile" name='Vile' />
                        </Col>
                        {/* <Col className=''>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose..." onChange={(e) => setSelectedCountry(e.target.value)}>
                                    <option value="">Pays</option>
                                    {countries.map(country => (
                                        <option key={country.id} value={country.iso2}>{country.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col className='city p-0'>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose..." >
                                    <option value="">Ville</option>
                                    {cities.map(city => (
                                        <option key={city.id} value={city.name}>{city.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col> */}
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="Email" placeholder="Email" name="Email" />
                                <div id="passwordHelpBlock" className="form-text">Optionnel</div>
                            </Form.Group>
                        </Col>
                        <Col className='pb-2'>
                            <Form.Control placeholder="Telephone" name='Telephone' />
                        </Col>

                        {/* <Col className='p-0'>
                            <Form.Group as={Col} controlId="formGridState" >
                                <Form.Select defaultValue="Choose...">
                                    <option>Telephone</option>
                                </Form.Select>
                            </Form.Group>
                        </Col> */}

                        <Col >
                            <Button variant="primary" type="submit" style={{ backgroundColor: "rgba(255, 188, 16, 1)", color: "black", border: "1px solid rgba(186, 186, 186)", boxShadow: "2px 2px 4px gray" }}>
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
