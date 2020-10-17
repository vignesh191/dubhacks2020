import React from 'react';
import styles from './navbar.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Container, Accordion, Modal, Button} from 'react-bootstrap'

function TopBar(props) {

  return (
      <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Name</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      </Container>
  );
}

export default TopBar;