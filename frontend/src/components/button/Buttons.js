import React from 'react';
import styles from './button.css'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Buttons(props) {

  return (
    <div className="mb-2">
        <Button variant="primary" size="lg">
            {props.icon}
        </Button>{' '}
        {/* <Button variant="secondary" size="lg">
            {props.icon}
        </Button> */}
    </div>
  );
}

export default Buttons;