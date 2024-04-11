import React from 'react'
import Navbar from '../components/navbar'
import { Col } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

export default function Blog() {
  return (
    <>
      <Navbar />
      <Container className='d-flex justify-content-between p-5'>
        <Col md={3} className=' sinistra_blog'>
          <div className='text-center'>
            <img src='...' />
            <p>Nickname <hr /></p>
          </div>
          <ul>
            <li>Gruppi</li>
            <li>Eventi</li>
          </ul>
        </Col>
        <Col md={6} className='centrale_blog'>
          <input type='text' placeholder='Scrivi qualcosa...' className='text_area_centrale d-flex justify-content-center'></input>
          <div className='d-flex justify-content-between m-3 fs-3' >
            <button className='evento_blog' style={{ backgroundColor: '#9913D9', color: 'white' }}>Evento</button>
            <button className='pubblica_blog' style={{ backgroundColor: '#9913D9', color: 'white' }}>Pubblica</button>
          </div>
        </Col>
        <Col md={3} className=' destra_blog'>
          <p className='text-center fs-3' style={{ fontWeight: 'bold'}}>News Universitarie <hr /></p>
          <ul>
            <div className='tabella_news' style={{ listStyle: 'none' }}>
              <li className='fs-5'>Titolo:</li>
            </div>
          </ul>
        </Col>
      </Container>
    </>
  )
}
