import React from 'react'
import Navbar from '../components/navbar'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Esami() {
  return (
    <>
      <Navbar />
      {/* Sezione Prenota Esame */}
      <Container className='d-flex'>

        <div className='d-flex flex-column parte_sinistra'>
          <div className='aggiungi_esame d-flex' style={{ marginTop: '3rem' }}>
            <div className='d-flex flex-column fs-6' >
              <p className='fs-5'>Esami Completati <hr /></p>

              L’obiettivo di questa pagina è quello di poter registrare e tener traccia dei propri esami
              <button style={{ width: '10rem' }} className='fs-6 mt-3 ms-2 btn_aggiungi_esame p-2'>Aggiungi Esame</button>
            </div>
            <img src='...' style={{ width: '8rem', height: '8rem', margin: '1rem' }} />
          </div>

          {/* Sezione Calendario */}
          <div className='calendario_esami mt-4'>
            <p className='fs-5 text-center'>Calendario Esami <hr /></p>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="..." />
                <Card.Body>
                  <Card.Title style={{ color: '#3D0955' }}>Nome Esame</Card.Title>
                  <Card.Text>
                    Descrizione Esame
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='d-flex justify-content-between'>
              <button style={{ width: '10rem' }} className='fs-6 mt-3 ms-2 btn_aggiungi_esame p-2'>Prenota</button>
              <button style={{ width: '10rem' }} className='fs-6 mt-3 ms-2 btn_aggiungi_esame p-2'>Conferma</button>
            </div>
          </div>
        </div>

        {/* Cronologia Esami */}
        <div className='parte_destra ms-3' style={{ marginTop: '3rem' }}>
          <p className='fs-5 text-center'>Cronologia Esami <hr /></p>
          <ul>
            <li>Nome Esame:</li>

          </ul>
          <p className='text-center'>Media Voti: </p>
        </div>
      </Container>
    </>
  )
}
