import React from 'react';
import styles from './navbar.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Container, Accordion, Modal, Button} from 'react-bootstrap'
import Popup from '../popup/Popup.js'

function TopBar(props) {

  return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Hotline Operator</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Navbar.Text>If you are experiencing life-threatening emergency, please call 911:&nbsp;&nbsp;</Navbar.Text>
            <Popup/>
        </Navbar>
      </Container>
  );
}

export default TopBar;