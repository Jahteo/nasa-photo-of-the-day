import React, { useState } from "react"
// import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
// import "./custom.css"

function AboutUs ({buttonLabel, className }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>About Us</Button>
      <Modal  className="modal-dialog modal-lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Josh Glantz</ModalHeader>
        <ModalBody>
          <p> Lambda Student </p>
          <p> Moving from behind the stove and storefront to behind the screen, Josh is proving that there can at least be a few great things to come from a global pandemic. As the world restructures, he's now daydreaming of being a lazy coding homesteader. Yessir, the epitome of ambition. </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AboutUs;