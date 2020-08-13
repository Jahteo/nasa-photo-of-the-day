import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import CenterMenu from "./components/CenterMenu"
import SideMenu from "./components/SideMenu"
import PhotoOfDay from "./components/PhotoOfDay"

const API_KEY = "DEMO_KEY"
// const API_KEY = "MkDmR7vIsfFN3eSnARUsKJH4C0tPaXa8TcemitmE"
//this would be a cute use of state that creates a button to switch between API key's, esp if the first has been timed out to show error screen. Otherwise just build a mini logic thingy that checks if DEMO_KEY works and shuttles to the next if not.
function App() {
  const [imgObj, setImgObj] = useState({})
  const [specificDate, setSpecificDate] = useState("&date=2012-03-14") //sample: &date=2012-03-14
  //state for whether the 1st & 2nd menu are visible?? Dunnoyet, the first CenterMenu will popup when the img is clicked on (containing "Back", "SideMenu" & "shuffle" buttons, maybe an "exitMenu" button). The second SideMenu will popup when it's button is pushed, replacing the CenterMenu (it'll add a dateSelector, AboutMe, & MoreInfo options). Hmm, that actually sounds kinda rough. Maybe we'll make the MoreInfo a toggle switch for the info. TBD.

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${specificDate}`)
      .then((response) => {
        setImgObj(response.data)
      })
      .catch(err => {
        console.log(err)
        debugger
    })
  }, [])
  console.log("timing:", imgObj)
  let root = document.querySelector("body") //basis of setting background
  // root.style.backgroundColor="black"; //
  root.style.backgroundImage = `url(${imgObj.url})`
  return (
    <div className="App">
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      Date: {Date}
    </p>
    <CenterMenu imgObj={imgObj} />
    <PhotoOfDay imgObj={imgObj} />
    <SideMenu imgObj={imgObj} />
    </div>
  );
}

export default App;
