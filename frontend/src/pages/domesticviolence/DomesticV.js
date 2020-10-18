import React, {useState, useEffect} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './domesticv.css'
import axios from 'axios'
import ContactCard from '../../components/contactcard/ContactCard.js'


function DomesticV() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/domestic')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(response => {
            setData(response);
        })
        .catch((err) => {
            console.log(err);
        })
  }, [])

  useEffect(() => {
    setData(data);
    console.log(data);
  }, [data])


  return (
        <Container>
            <Jumbotron>
                <h2> Domestic Violence Emergency Resources: </h2>
                <hr/>
                {data.map(item =>
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
                )}
            </Jumbotron>
        </Container>
  );
}

export default DomesticV;




