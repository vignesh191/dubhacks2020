import React from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import Blockbutton from '../../components/button/Blockbutton.js'
import styles from './about.css'
import axios from 'axios'
import {  Link } from 'react-router-dom'

function About() {


return (<Container>
            <Jumbotron>
                <div className='title'>
                    <h1> About ERA: </h1>
                    <Link to="/" className="btn btn-secondary btn-lg ml-auto">Go Back</Link>
                </div>
                <hr/>
                <p>With the rise of police brutality and the Black Lives Matter movement, it is
                becoming abundantly clear that certain problems are not handled well by the police
                and would best be handled by specialized professionals. Because people tend to be reluctant
                to call the police for almost any problem, we created ERA to allow people to easily get access
                to police alternative resources that would be most effective for their problems, while simultaneously
                reducing the load on local law enforcement so they can focus on the real emergencies that require their
                attention.</p>
                <p> Based on the user&apos;s location, ERA gives a list of police alternative resources for specific
                categories such as domestic violence, mental health, homelessness, and more.</p>
            </Jumbotron>


        </Container>)


}

export default About;