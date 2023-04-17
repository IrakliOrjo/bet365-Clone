import { BrowserRouter, Routes, Route } from "react-router-dom"

import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Match from './components/Match'
import Home from './Home.js'
import Sport from './components/Sport'


import './index.css';

function App() {

  const [sport, setSport] = useState(true)
  const [inPlay, setInPlay] = useState(false)

  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const fixedDivRef = useRef(null);

  const handleClick = () => {
    setShowFixedDiv(true);
  };

  

  return (
    <BrowserRouter>
    <div className="bg-black min-h-screen flex flex-col">
       {/*FIXED LOGIN*/}
       {showFixedDiv && <div className='fixed flex flex-col p-6 brightness-100 top-[23%] w-[25em] bg-slate-300 left-[11%]
       sm:left-[20%] md:left-[32%] xl:left-[39%]'>
            <input className='bg-zinc-50 border pl-2 border-gray-500 mb-2 py-2' placeholder='Username'  type='mail' />
            <input className='bg-zinc-50 border pl-2 mb-2 border-gray-500 py-2' placeholder='Password' type='password' />
            <div onClick={() => setShowFixedDiv(false)} className="absolute top-0 font-bold text-[1.2.rem] cursor-pointer right-2">X</div>
            <button className='bg-green-900 hover:bg-green-700 py-2 mb-2 text-white font-bold'>Log in</button>
            <div className='flex justify-between'>
                <p className='text-[.85rem] hover:text-green-500 cursor-pointer text-green-800'>Join Now</p>
                <p className='text-[.85rem] hover:text-green-500 cursor-pointer text-green-800'>Have trouble logging in?</p>
            </div>
        </div>}
        
        <div className="">
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
      handleClick={handleClick}
      setSportState={setSport}
      setInPlayState={setInPlay}
      showFixedDiv={showFixedDiv}
      setShowFixedDiv={setShowFixedDiv}
      />} />
    
      {/* Match details*/}

    
    </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
