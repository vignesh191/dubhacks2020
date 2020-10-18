import React from 'react';
import styles from './button.css'
import {Button} from 'react-bootstrap'

function Blockbutton(props) {

  return (
    <div className="mb-2">
        <Button href={props.link} variant={props.color} onClick={props.func} size="lg" block>
            {props.icon}
        </Button>{' '}
    </div>
  );
}

export default Blockbutton;