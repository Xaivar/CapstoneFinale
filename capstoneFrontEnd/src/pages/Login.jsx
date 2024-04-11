import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from "../api/axios";
import Img from '../assets/LogoCapstone.png';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie");
            const response = await axios.post("/login", {
                email,
                password,
            });
            if (response.status === 200) {
                setLoggedInUser(response.data.user);
                console.log("Login success:", response.data.user);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <Container className='d-flex justify-content-between' fluid>
            <Col as={Col} md="6" className='mt-5 ms-5'>
                <img src={Img} alt="Logo" className="mt-5" style={{ marginLeft: "8rem" }} />
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3 d-flex ms-5">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Inserisci la tua Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback>Email Sbagliata</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 ms-5">
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Inserisci la tua password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Password Corretta</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row as={Col} md="4" className="mt-5 ms-5">
                        <Button type="submit" className="me-1 AccediLogin" style={{ backgroundColor: '#9913D9', border: 'none' }}>Accedi</Button>
                        <Button className="RegistratiLogin" style={{ backgroundColor: '#9913D9', border: 'none' }} href='/register'>Registrati</Button>
                    </Row >
                </Form>
            </Col>
            <Col as={Col} md="5" className='ImmagineLaterale'></Col>
        </Container>
    )
}

