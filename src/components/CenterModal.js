import React, { useState } from "react"
// import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import PhotoOfDay from "./PhotoOfDay"
// import "./custom.css"

function CenterModal ({buttonLabel, className, imgObj}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal  className="modal-dialog modal-lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{imgObj.title}</ModalHeader>
        <ModalBody>
        <PhotoOfDay imgObj={imgObj} />
          <p> {imgObj.explanation} </p>
          <p> {imgObj.date} </p>
          <p> {imgObj.copyright} </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CenterModal;