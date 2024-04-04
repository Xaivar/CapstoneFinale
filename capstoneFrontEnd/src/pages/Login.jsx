import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Img from '../assets/LogoCapstone.png'

export default function Login() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };



    return (
        <Container className='d-flex justify-content-between' fluid>
            <Col as={Col} md="6" className='mt-5 ms-5'>
                <img src={Img} alt="Logo" className="mt-5" style={{ marginLeft: "8rem" }} />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 d-flex ms-5">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Inserisci il tuo Username"
                            />
                            <Form.Control.Feedback>Username corretto</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 ms-5">
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Inserisci la tua password"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Password Corretta</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row as={Col} md="4" className="mt-5 ms-5">
                        <Button type="submit" className="me-1" style={{ backgroundColor: '#9913D9' }}>Accedi</Button>
                        <Button style={{ backgroundColor: '#9913D9' }}>Registrati</Button>
                    </Row >

                </Form>
            </Col>

            <Col as={Col} md="5" className='ImmagineLaterale'>
            </Col>
        </Container>
    )
}
