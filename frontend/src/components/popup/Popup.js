import React,{useState} from 'react';
import {Button, Modal} from 'react-bootstrap'

function Popup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Call 911
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            If you are calling 911, you should understand how involving the police could impact you and others around you.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button href="tel:911" variant="danger" onClick={handleClose}>
              I understand, call 911
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Popup;