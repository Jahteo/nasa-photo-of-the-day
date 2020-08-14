import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import SideMenu from "./SideMenu"

function SideBar ({imgObj}) {
//this should originally show a small button in the corner that becomes more noticible when you move the mouse. Upon clicking, it slides from the left, revealing the actual menu buttons. Bonus points for using the animation from that one place that I tried that one time.

    // let styles

    return (
        <div style={{marginRight: "5%", textAlign: "right"}}>
            <div>SideBar</div>
            <SideMenu imgObj={imgObj} />
        </div>
    )
}

export default SideBar;