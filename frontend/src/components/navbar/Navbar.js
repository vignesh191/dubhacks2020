import React from 'react';
import styles from './navbar.css'

function Navbar(props) {

  return (
    <div>
        Hey {props.icon}
    </div>
  );
}

export default Navbar;