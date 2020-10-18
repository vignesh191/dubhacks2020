import React, {useState} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './homeless.css'


function Homeless() {
  const [checked, setChecked] = useState(false);
  const [buttonValue, setButtonValue] = useState('4');

  const menu = [
    { name: 'Homeless Outreach', value: '1' },
    { name: 'Homeless Shelters', value: '2' }
  ];

  return (
        <Container>
            <Jumbotron>
            <h2>Select a Homelessness Resource:</h2>
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

export default Homeless;