import React, {useState, useEffect} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './mentalhealth.css'
import {  Link } from 'react-router-dom'
import ContactCard from '../../components/contactcard/ContactCard.js'
import Loader from 'react-loader-spinner';

function Mentalhealth() {
  const [checked, setChecked] = useState(false);
  const [buttonValue, setButtonValue] = useState('4');
  const [depressionData, setDepressionData] = useState([]);

  const menu = [
    { name: 'Depression', value: '1' },
    { name: 'Self-Harm', value: '2' },
  ];

  useEffect(() => {
    fetch('http://localhost:8000/mentalhealth/depression')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            setDepressionData(response);
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        })
  }, [])

  useEffect(() => {
    setDepressionData(depressionData);
  }, [depressionData])



  if (depressionData.length===0) {
    return (
        <Container>
            <Jumbotron>
                <div className='title'>
                     <h2>Select a Mental Health Resource:</h2>
                    <Link to="/" className="btn btn-secondary btn-lg ml-auto">Go Back</Link>
                </div>
                <hr/>
                <div
                  style={{
                    width: "100%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Loader type="TailSpin" color="#333A40" height="100" width="100" />
                </div>
            </Jumbotron>
        </Container>
    )
  } else {
  return (
        <Container>
            <Jumbotron>
            <div className='title'>
                 <h2>Select a Mental Health Resource:</h2>
                <Link to="/" className="btn btn-secondary btn-lg ml-auto">Go Back</Link>
            </div>
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
              </Row>
              <br/>
              {buttonValue === '1' ?
                (depressionData.map(item =>
                <div>
                <ContactCard name={item.name}
                            address={item.address}
                            open={(typeof item.hours !== "undefined") ?
                                    (item.hours.open_now ? 'Currently Open' : 'Not Open') :
                                     'No Data Available'}
                            website={item.website}
                            phone={item.phone} />
                 <br/>
                 </div>
                )) : <div></div> }
            </Jumbotron>
        </Container>
  )}
}

export default Mentalhealth;