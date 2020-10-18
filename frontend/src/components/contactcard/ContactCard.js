import React from 'react';
import styles from './contactcard.css'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ContactCard(props) {


  function changeURL() {
    window.location.href = props.website;
  }

  return (
    <Card className='contact-card'>
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Text><strong>Address:</strong> {props.address}</Card.Text>
        <Card.Text>
          <strong>Open Status:</strong> {props.open}
        </Card.Text>
        <Button onClick={changeURL} variant='outline-primary'>Visit Website</Button>
        <Button  href={"tel:"+props.phone} variant="primary"> Call: {props.phone}</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;