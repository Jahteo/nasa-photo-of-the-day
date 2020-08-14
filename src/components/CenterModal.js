import React, { useState } from "react"
// import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import PhotoOfDay from "./PhotoOfDay"


// const openCenterMenu = () => {
    // }

function CenterModal ({buttonLabel, className, imgObj}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
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










// import React from "react"
// // import styled from "styled-components"
// import PhotoOfDay from "./PhotoOfDay"

// function CenterMenu ({imgObj}) {
//     //this is kinda weird righ tnow, but the img will eventually be the entire background, and I want to click anywhere on the image.
//     console.log(imgObj)

//     return (
//         <div>

//             {/* toggle this for "Full Image" Card */}
//             <PhotoOfDay imgObj={imgObj} />
//             <div>
//                 <h2> {imgObj.title} </h2>
//                 <p> {imgObj.explanation} </p>
//                 <h3> {imgObj.date} </h3>
//                 <p> Copyright: {imgObj.copyright} </p>
//             </div>

//         </div>
//     )
// }

// export default CenterMenu;