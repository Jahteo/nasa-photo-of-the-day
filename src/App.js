import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
// import styled from "styled-components"
import SideMenu from "./components/SideMenu"
import SideBar from "./components/SideBar"

// const API_KEY = "DEMO_KEY"
const API_KEY = "MkDmR7vIsfFN3eSnARUsKJH4C0tPaXa8TcemitmE"
//this would be a cute use of state that creates a button to switch between API key's, esp if the first has been timed out to show error screen. Otherwise just build a mini logic thingy that checks if DEMO_KEY works and shuttles to the next if not.

function App() {
  const [imgObj, setImgObj] = useState({})
  const [specificDate, setSpecificDate] = useState("") //sample: &date=2012-03-14, left as initial state for all the times the daily pic is down in the afternoon

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

  let root = document.querySelector("body")
  root.style.backgroundImage = `url(${imgObj.hdurl})`
  console.log("timing:", imgObj)

  return (
    <div className="App">
      <SideBar imgObj={imgObj} />
    </div>
  );
}

export default App;
