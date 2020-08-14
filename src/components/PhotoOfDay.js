/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

function PhotoOfDay ({imgObj}) {
    //deconstruct to make the
    return (
        <img
            src={imgObj.url}
            id={imgObj.date}
            alt={`Nasa's Photo Of The Day for ${imgObj.date}: ${imgObj.title}`}
        />
    )

}

export default PhotoOfDay;

