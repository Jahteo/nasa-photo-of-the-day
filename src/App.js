import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"

const API_KEY = "DEMO_KEY"
// const API_KEY = "MkDmR7vIsfFN3eSnARUsKJH4C0tPaXa8TcemitmE"
//this would be a cute use of state that creates a button to switch between API key's, esp if the first has been timed out to show error screen.
function App() {
  const [imgObj, setImgObj] = useState({})
  const [specificDate, setSpecificDate] = useState("&date=2012-03-14") //sample: &date=2012-03-14

  // const imgs = //all the imgs???
  //state for whether the 1st & 2nd menu are visible??

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

  console.log(imgObj)
  return (
    <div className="App">
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
    <img src={imgObj.url} alt="something actually relevant_____"/>
    </div>
  );
}

export default App;
