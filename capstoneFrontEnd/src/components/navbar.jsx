import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function navbar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#D0C4D6"}}>
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/esami">Esami</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <NavDropdown title="Account" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/profilo" style={{ color: '#3D0955' }}>
              Profilo
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login" style={{ color: '#3D0955' }}>
              Log-out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
