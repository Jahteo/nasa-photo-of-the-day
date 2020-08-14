import React, { useState } from "react"
// import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import CenterModal from "./CenterModal";



function SideMenu ({buttonLabel, className, imgObj}){

    return (
        <div>
            <div>SideMenu</div>
            {/* <Button>Today's Picture</Button> {" "} */}
            <Button >Another Day's Picture</Button> {" "}
            <Button>About APOD</Button> {" "}
            <Button>About Us</Button> {" "}
            <CenterModal buttonLabel="Today's Picture" imgObj={imgObj} />

        </div>
    )
}

export default SideMenu;