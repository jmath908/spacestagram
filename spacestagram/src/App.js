import logo from './logo.svg';
import './App.css';
import SpaceCard from './components/SpaceCard'
import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HttpClient from "./HttpClient"

function App() {
  const [apods, setApod] = useState([])
  const [loading, setLoading] = useState(true);



  const fetchData = () => {
    fetch(`https://api.nasa.gov/planetary/apod?count=6&api_key=VoZH1FtGmlZ8iZOmw2A4Cp1fHokrmgK3cBMJLAj5`)
    .then(response => response.json())
    .then(data => setApod(data))
    .then(()=>setLoading(false))
    .catch(error => console.error(error))
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header" >
      {loading ? 
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Taking you to outer space!</h1>
      :<>
      <h1>Spacestagram</h1>
      <h3>from NASA's APOD</h3>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
              {apods.map((apod, index) => (
                <SpaceCard apod = {apod} />
              ))}
            </div>
            </>
}
    </header>
    </div>
  );
}

export default App;
