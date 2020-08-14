import React from "react"
import { Button } from "reactstrap"

function AboutAPOD ({buttonLabel, className,}){

    return (
        <div>
            <Button href="https://apod.nasa.gov/apod/ap_faq.html">About APOD</Button> <br />
        </div>
    )
}

export default AboutAPOD;