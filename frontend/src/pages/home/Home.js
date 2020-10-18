import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import Blockbutton from '../../components/button/Blockbutton.js'
import styles from './Home.css'
import axios from 'axios'

function Home() {

function getData() {
    fetch('http://localhost:8000/domestic')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}


  return (
        <Container>
            <Jumbotron>
            <h1>List of Services:</h1>
            <h5 className='jumbotron-text'>
              Select your emergency from the list provided below.
              Easily get information regarding your emergency service.
            </h5>
            <br/>
            <hr/>
            <hr/>
            <br/>
            <br/>
            <Row md={4} className='button-layout'>
              <Col>
                <Blockbutton color='outline-danger' icon='Domestic Violence' func={getData} />
              </Col>
              <Col>
                 <Blockbutton color='outline-danger' icon='Homelessness' />
              </Col>
              <Col>
                <Blockbutton color='outline-danger' icon='Mental Length' />
              </Col>
              <Col>
                <Blockbutton color='outline-danger' icon='Sexual Assualt' />
              </Col>
            </Row>
            <br/>
            <br/>
            <Row md={3} className='button-layout'>
              <Col>
                <Blockbutton color='outline-danger' icon='Substance Abuse' />
              </Col>
              <Col>
                 <Blockbutton color='outline-danger' icon='Child Abuse' />
              </Col>
              <Col>
                <Blockbutton color='outline-danger' icon='Other' />
              </Col>
            </Row>
            <br/>
            <br/>
            <hr/>
            <hr/>
            </Jumbotron>
        </Container>
  );
}

export default Home;