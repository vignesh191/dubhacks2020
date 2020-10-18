import React, {useState, useEffect} from 'react';
import Blockbutton from '../../components/button/Blockbutton.js'
import Buttons from '../../components/button/Buttons.js'
import {Container, Jumbotron, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'
import styles from './domesticv.css'
import axios from 'axios'
import ContactCard from '../../components/contactcard/ContactCard.js'
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom'

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


  if (data.length===0) {
    return (
        <Container>
            <Jumbotron>
                <div className='title'>
                    <h2> Domestic Violence Emergency Resources: </h2>
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
                    <h2> Domestic Violence Emergency Resources: </h2>
                    <Link to="/" className="btn btn-secondary btn-lg ml-auto">Go Back</Link>
                </div>
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
  )}
}

export default DomesticV;




