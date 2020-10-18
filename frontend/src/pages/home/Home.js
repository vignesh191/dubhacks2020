import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import Blockbutton from '../../components/button/Blockbutton.js'
import styles from './Home.css'
import axios from 'axios'
import {  Link } from 'react-router-dom'
function Home() {
  return (
        <Container>
            <Jumbotron>
            <h1>List of Services:</h1>
            <h5 className='jumbotron-text'>
              Select your emergency from the list provided below.
              Get information regarding your emergency service <u>fast and easy </u>
              for <u>your area</u>.
            </h5>
            <br/>
            <hr/>
            <hr/>
            <br/>
            <br/>
            <Row md={4} className='button-layout'>
              <Col>
                <Link to="/domesticviolence" className="btn btn-outline-danger btn-block btn-lg">Domestic Violence</Link>
              </Col>
              <Col>
                <Link to="/homeless" className="btn btn-outline-danger btn-block btn-lg">Homelessness</Link>
              </Col>
              <Col>
                <Link to="/mentalhealth" className="btn btn-outline-danger btn-block btn-lg">Mental Health</Link>
              </Col>
              <Col>
                <Link to="/sexualassault" className="btn btn-outline-danger btn-block btn-lg">Sexual Assault</Link>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row md={3} className='button-layout'>
              <Col>
                <Link to="/substanceabuse" className="btn btn-outline-danger btn-block btn-lg">Substance Abuse</Link>
              </Col>
              <Col>
                <Link to="/youth" className="btn btn-outline-danger btn-block btn-lg">Youth</Link>
              </Col>
              <Col>
                <Link to="/other" className="btn btn-outline-danger btn-block btn-lg">Other</Link>
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