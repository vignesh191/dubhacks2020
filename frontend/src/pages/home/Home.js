import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'
import styles from './Home.css'

function Home() {
  return (
        <Container>
            <Jumbotron>

            <h1>List of Services:</h1>
            <h5 className='jumbotron-text'>
              Select your emergency from the list provided below.
              Easily get information regarding your emergency service.
            </h5>
            <hr/>
            </Jumbotron>
        </Container>
  );
}

export default Home;