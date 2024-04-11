import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Register() {

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

   
      <Container fluid className='d-flex justify-content-between'>

        {/* Parte sinistra della pagina [dove va il form di registrazione] */}
        <Col as={Col} md="6" style={{ padding: "8rem"}}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label className='mt-3 fs-4'>Nome e Cognome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci il nome ed il cognome"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label className='mt-3 fs-4'>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                defaultValue=""
              />
              <Form.Control.Feedback>Sembra corretto!</Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label className='mt-3 fs-4'>Città</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Inserisci una città valida
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label className='mt-3 fs-4'>Stato</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Perfavore inserisci uno stato valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label className='mt-3 fs-4' >Codice postale</Form.Label>
              <Form.Control type="number" placeholder="CAP" required />
              <Form.Control.Feedback type="invalid">
                Inserisci il tuo codice postale 
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className='mt-3' style={{ backgroundColor: '#9913D9' }}>Registrati</Button>
          </Form>

          {/* Parte destra della pagina [dove va l'immagine] */}
        </Col>
        <Col as={Col} md="6" className='parteDestra'>
        </Col>
      </Container>

    
  )
}
