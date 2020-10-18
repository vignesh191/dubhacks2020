import React from 'react';
import Buttons from '../../components/button/Buttons.js'

function MentalHealth() {
  return (
    <div>
        <h2>What Type of Mental Health Resources Would You Like to Use?</h2>
        <Buttons icon={"Depression"}color = {"outline-primary"}/>
        <Buttons icon={"Self Harm"}color = {"outline-danger"}/>
        <Buttons icon={"Emotional Support"}color = {"outline-warning"}/>
    </div>
  );
}

m
export default MentalHealth;