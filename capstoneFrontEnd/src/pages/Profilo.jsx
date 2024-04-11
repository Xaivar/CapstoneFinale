import React from 'react'
import Navbar from '../components/navbar'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profilo() {
  return (

    <>
      <Navbar />

      <Container className='profilo_centrale mt-5 text-center'>
        {/* Immagine Profilo centrata */}
        <div className='foto_profilo mt-5' >
          <img src='...' />
          <p className='mt-5 fs-5'>Nickname</p>
          <hr/>
        </div>

        {/* Card centrale profilo */}
        <div className='cards_centrale d-flex justify-content-between' style={{ margin: '7rem'}}>
          <Card style={{ width: '18rem', backgroundColor: '#D0C4D6' }}>
            <Card.Body>
              <Card.Title style={{ color: '#3D0955' }}>Media Voti

              </Card.Title>
              <Card.Text style={{ color: '#3D0955' }}>
                ...
              </Card.Text>
            
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', backgroundColor: '#D0C4D6' }}>
            <Card.Body>
              <Card.Title style={{ color: '#3D0955' }}>Corso di Studi</Card.Title>
              <Card.Text style={{ color: '#3D0955' }}>
                ...
              </Card.Text>
             
            </Card.Body>
          </Card>
        </div>
      </Container>

    </>
  )
}
