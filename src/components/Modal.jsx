import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../style/Modal.css"
import "../style/Global.css"

function Contactmodal () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="https://getform.io/f/e05fc353-4d77-4ad4-84f0-82f69fbd062d" method="POST">
            <div class="mb-3">
              <input type="text" name="name" class="form-control" id="name" placeholder="Name:"></input>
            </div>
            <div class="mb-3">
              <input type="email" name="email" class="form-control" id="email" placeholder="Email:" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
              <textarea type="text" name="message" class="form-control" id="message" placeholder="Tell us your vision..."></textarea>
            </div>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contactmodal;