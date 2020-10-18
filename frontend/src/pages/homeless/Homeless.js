import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'
import styles from './homeless.css'


function Homeless() {
  return (

        <Container>
            <Jumbotron>
            <h5 className='jumbotron-text'>
              Select your emergency from the list provided below.
              Easily get information regarding your emergency service.
            </h5>
            <hr/>
            <h1>List of Services:</h1>


            </Jumbotron>
        </Container>
  );
}

export default Homeless;