import React, {useState} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './other.css'


function Other() {

  return (
        <Container>
            <Jumbotron>
                <h2> Other Emergency Resources: </h2>
                <hr/>
            </Jumbotron>
        </Container>
  );
}

export default Other;