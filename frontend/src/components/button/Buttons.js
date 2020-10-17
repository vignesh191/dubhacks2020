import React from 'react';
import styles from './button.css'
import {Button} from 'react-bootstrap'

function Buttons(props) {

  return (
    <div className="mb-2">
        <Button variant={props.color} size="lg">
            {props.icon}
        </Button>{' '}
    </div>
  );
}

export default Buttons;