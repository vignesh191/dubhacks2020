import React, {useState} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './mentalhealth.css'

function MentalHealth() {
  const [checked, setChecked] = useState(false);
  const [buttonValue, setButtonValue] = useState('4');

  const menu = [
    { name: 'Depression', value: '1' },
    { name: 'Self-Harm', value: '2' },
    { name: 'Emotional Support', value: '3' },
  ];

  //depending on buttonval we will change
  return (
        <Container>
            <Jumbotron>
            <h2>Select a Mental Health Resource:</h2>
            <hr/>
            <Row>
              <Col>
              <ButtonGroup toggle size='lg'>
                {menu.map((item, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="primary"
                    name="radio"
                    value={item.value}
                    checked={buttonValue === item.value}
                    onChange={(e) => setButtonValue(e.currentTarget.value)}
                  >
                    {item.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              </Col>
              <Col xs lg={2}>
              <Buttons color={'secondary'} icon={'Go Back'} />
              </Col>
              </Row>
            </Jumbotron>
        </Container>
  );
}

export default MentalHealth;