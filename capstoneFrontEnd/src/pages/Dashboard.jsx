import React from 'react'
import Navbar from '../components/navbar'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import axios from "../api/axios";
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
export default function Dashboard() {

  // Chiamata alla tabella News -
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Chiamata alla tabella Indirizzi Studio -
  const [indirizziStudio, setIndirizziStudio] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/indirizziStudio')
      .then(response => {
        setIndirizziStudio(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }
}
  return (
    <>
      <Navbar />
      {/* Codice per la sezione: Indirizzi di studio */}
      <Container fluid>
        <h3 className='mt-4 ms-3'>Indirizzi di studio</h3>
        <div className='d-flex '>
          {indirizziStudio.map(indirizzo => (
            <Container className='ms-5 mt-3 d-flex flex-column align-items-center indirizziStudio'>              
              <div className='iconaCorso'><i className='bi bi-backpack2' /> </div>
              <div className='pIndirizzi fs-6 pCorso'>{indirizzo.nome}</div>
            </Container>
          ))}
        </div>
      </Container>

      {/* Codice per la sezione: Corsi Universitari  */}

      <Container fluid>
        <h3 className='mt-4 ms-3'>Corsi Universitari</h3>
        <Container className='ms-5 mt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text className="fs-5 text-center">
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
              <Card.Text className="fs-5 text-center">
                <i className="bi bi-bookmark-plus-fill" style={{ fontSize: "2rem" }}></i>
                <h4>Aggiungi Corso</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

      {/* Codice per la sezione: News */}
      <Container fluid className=''>
        <h3 className='mt-4 ms-3'>News</h3>
        <div className='d-flex'>
          {news.map(news => (
            <Container className='ms-5 mt-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={news.immagine} />
                
                <Card.Body>
                <Card.Title className='text-center'>{news.titolo}<hr/></Card.Title>
                  <Card.Text className="fs-5">
                  {truncateText(news.descrizione, 70)}
                  </Card.Text>
                </Card.Body>
              </Card>

            </Container>))}</div>
      </Container>
    </>
  )


}
