import React from 'react'
import Navbar from '../components/navbar'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Dashboard() {
  return (
    <>
      <Navbar />
{/* Codice per la sezione: Indirizzi di studio */}
      <Container fluid>
        <h3 className='mt-4 ms-3'>Indirizzi di studio</h3>
        <Container className='ms-5 mt-3'>
          <img className='imgIndirizzi' alt='ciao' />
          <div className='pIndirizzi fs-6'> Medicina</div>
        </Container>
      </Container>

{/* Codice per la sezione: Corsi Universitari  */}

      <Container fluid>
        <h3 className='mt-4 ms-3'>Corsi Universitari</h3>
        <Container className='ms-5 mt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text class="fs-5 text-center">
                Anatomia I & II
              </Card.Text>
            </Card.Body>
          </Card>

        </Container>
      </Container>

{/* Codice per la sezione: I tuoi corsi */}
      <Container fluid>
        <h3 className='mt-4 ms-3'>I tuoi corsi</h3>
        <Container className='ms-5 mt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text class="fs-5 text-center">
              <i class="bi bi-bookmark-plus-fill" style={{ fontSize: "2rem" }}></i>
                <h4>Aggiungi Corso</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

{/* Codice per la sezione: News */}
<Container fluid>
        <h3 className='mt-4 ms-3'>News</h3>
        <Container className='ms-5 mt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text class="fs-5 text-center">
                News Uno
              </Card.Text>
            </Card.Body>
          </Card>

        </Container>
      </Container>
    </>
  )


}
