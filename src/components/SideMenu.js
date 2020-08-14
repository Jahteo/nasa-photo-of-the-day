import React, { useState } from "react"
// import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
// import Bootstrap from "bootstrap"
import CenterModal from "./CenterModal";
import AnotherDay from "./AnotherDay"
import AboutAPOD from "./AboutAPOD"
import AboutUs from "./AboutUs"


function SideMenu ({buttonLabel, className, imgObj}){

    return (
        //text-align not coordinating, ugg. can't get bootstrap or inline styles to cooperate...
        <div className="btn-group-vertical" style={{textAlign: 'right'}}>
            {/* can't get bootstrap class variations to work... */}
            <br />
            <br />
            <CenterModal buttonLabel="Today's Picture" imgObj={imgObj} /> <br />
            <AnotherDay  class="shadow p-3 mb-5 bg-white rounded"/> <br/>
            <AboutAPOD  class="shadow p-3 mb-5 bg-white rounded" /> <br />
            <AboutUs />
        </div>
    )
}

export default SideMenu;