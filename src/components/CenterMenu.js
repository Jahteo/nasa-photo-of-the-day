import React from "react"

function CenterMenu ({imgObj}) {
    //this is kinda weird righ tnow, but the img will eventually be the entire background, and I want to click anywhere on the image.
    console.log(imgObj)

    return (
        <div>
            <button class> Back </button>
            <button> (side)Menu </button>
            <button> Shuffle </button>
            <div>
                <h2> {imgObj.title} </h2>
                <p> {imgObj.explanation} </p>
                <h3> {imgObj.date} </h3>
                <p> Copyright: {imgObj.copyright} </p>
            </div>

        </div>
    )
}

export default CenterMenu;