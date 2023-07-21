import { BrowserRouter, Routes, Route } from "react-router-dom"

import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Match from './components/Match'
import Home from './Home.js'
import Sport from './components/Sport'
import Bet from './components/Bet'
import Register from "./components/Register";


import './index.css';

function App() {


  const [sport, setSport] = useState(true)
  const [inPlay, setInPlay] = useState(false)

  const [user, setUser] = useState('');

  //to show users made bets
  const [myBets, setMyBets] = useState({})
  const [showMyBets, setShowMyBets] = useState(false)

  //selected paragraph
  

  const [userLogged, setUserLogged] = useState(false)

  const [selectedBet, setSelectedBet] = useState(null)

  const [betSlip, setBetSlip] = useState([
    
  ])

  //total bet 
  const [totalBet, setTotalBet] = useState(0)

  //shows bet slip when choosing games to bet
  const [showBet, setShowBet] = useState(false)

  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const fixedDivRef = useRef(null);

  useEffect(() => {
    if(betSlip.length > 0){
      setShowBet(true)
    }else{
      setShowBet(false)
    }
  },[betSlip])
  


  const handleClick = (id,home,away,result,odd) => {
    if(!userLogged){
      setShowFixedDiv(true);
    }
    
    

    if(userLogged ){
      setSelectedBet(id)
     
      if(betSlip.some((bet) => bet.id === id)){
        setBetSlip(betSlip.filter((item) => item.id !== id));
      }else{
        setBetSlip(prevState => [...prevState, {
          id: id,
          home:home,
          away:away,
          result:result,
          odd:odd
        }])
      }
    }
   
  };

  const totalSum = betSlip.reduce((sum, game) => sum * game.odd, 1);
  const shortenedNumber = totalSum.toFixed(1);

  //total bet
  const totalWinNum = totalBet * shortenedNumber
  const totalWin = totalWinNum.toFixed(1);
  

  return (
    <BrowserRouter>
    <div className="bg-black min-h-screen flex flex-col">
       {/*FIXED LOGIN*/}
       {showFixedDiv && !userLogged && <div className='fixed flex flex-col p-6 brightness-100 top-[23%] w-[20em] md:w-[25em] bg-slate-300 left-[11%]
       sm:left-[20%] md:left-[32%] xl:left-[39%]'>
            <Register
              setUserLogged={setUserLogged}
              userLogged={userLogged}
              user={user}
              setUser={setUser}
              setShowFixedDiv={setShowFixedDiv}
            />
            <div className='flex justify-between'>
                <p className='text-[.85rem] hover:text-green-500 cursor-pointer text-green-800'>Join Now</p>
                <p className='text-[.85rem] hover:text-green-500 cursor-pointer text-green-800'>Have trouble logging in?</p>
            </div>
        </div>}
        {showBet && <div className='fixed flex rounded-md flex-col  bottom-[0%] w-[20em] md:w-[25em] bg-zinc-200 left-[11%]
       sm:left-[28%] md:left-[32%] xl:left-[39%] -translate-y-32 overflow-hidden max-h-[30em]'>
        <Bet
        betSlip={betSlip}
        odd={shortenedNumber}
        setShowBet={setShowBet}
        setMyBets={setMyBets}
        setTotalBet={setTotalBet}
        totalBet={totalBet}
        
        />
        
       </div> }
       {/* This shows already made bet */}
       {myBets.length > 0 && showMyBets && <div className='fixed  flex rounded-md flex-col  top-[61%] w-[20em] md:w-[25em] bg-zinc-200 left-[11%]
       sm:left-[20%] md:left-[32%] xl:left-[69%] overflow-hidden max-h-[30em]'>
        <p onClick={() => setShowMyBets(false)} className="absolute top-0 cursor-pointer right-2">X</p>
        <p className="text-slate-900 self-center text-[1.2rem] font-semibold">My Bets:</p>
        <ol className='p-4 flex flex-col bg-slate-200'>
          
        {myBets?.map((game) => {
          return (
            <li key={game.id} className="text-slate-800 flex justify-between">
              
              <div>{game.home} vs {game.away}</div> <span className="font-semibold"> {game.result}</span>
            </li>
          )
        })}
        </ol>
        <p className="text-zinc-900 self-end pr-3 mb-2">Expected Win: $ {totalWin}</p>
       </div> }
        
        <div className="">
    <Header 
      sportState={sport}
      inPlayState={inPlay}
      setSportState={setSport}
      setInPlayState={setInPlay}
      setShowMyBets={setShowMyBets}
      showMyBets={showMyBets}
      userLogged={userLogged}
      user={user}
      setShowFixedDiv={setShowFixedDiv}
    />
    <div className="flex justify-center  md:px-[2em] lg:px-[1em] xl:px-[1em] bg-[#222121]">
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
      selectedBet={selectedBet}
      userLogged={userLogged}
     
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
