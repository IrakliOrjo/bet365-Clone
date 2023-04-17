import { BrowserRouter, Routes, Route } from "react-router-dom"

import {useState} from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Match from './components/Match'
import Home from './Home.js'
import Sport from './components/Sport'


import './index.css';

function App() {

  const [sport, setSport] = useState(true)
  const [inPlay, setInPlay] = useState(false)

  return (
    <BrowserRouter>
    <div className="bg-black min-h-screen flex flex-col">
    <Header 
      sportState={sport}
      inPlayState={inPlay}
      setSportState={setSport}
      setInPlayState={setInPlay}
    />
    <div className="flex justify-center  md:px-[2em] lg:px-[6em] xl:px-[12em] bg-[#222121]">
    <Sidebar
      setSportState={setSport}
      setInPlayState={setInPlay}
    />
    
    <Routes>
      <Route path="/" element={<Sport
      
      sportState={sport}
      inPlayState={inPlay}
      setSportState={setSport}
      setInPlayState={setInPlay}
      />} />
      <Route path="/match/:id" element={<Match 
      setSportState={setSport}
      setInPlayState={setInPlay}
      />} />
    
      {/* Match details*/}

    
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
