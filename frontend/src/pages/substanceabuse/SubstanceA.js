import React, {useState} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './substancea.css'


function SubstanceA() {

  return (
        <Container>
            <Jumbotron>
                <h2> Substance Abuse Emergency Resources:</h2>
                <hr/>
            </Jumbotron>
        </Container>
  );
}

export default SubstanceA;