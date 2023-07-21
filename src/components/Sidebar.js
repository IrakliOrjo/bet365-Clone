import {AiTwotoneStar} from 'react-icons/ai'
import {BiFootball,BiTennisBall,BiBaseball,BiBasketball} from 'react-icons/bi'
import {GiCurlingStone,GiSoccerBall,GiHound,GiHorseHead,GiHockey} from 'react-icons/gi'
import {MdSportsEsports,MdOutlineSportsVolleyball,MdOutlineSportsHandball} from 'react-icons/md'
import {FaHockeyPuck,FaTableTennis,FaVolleyballBall} from 'react-icons/fa'
import {RiBilliardsFill} from 'react-icons/ri'
import {CgGames} from 'react-icons/cg'

import { useState } from 'react'
import {games} from './data.js'

import { Link } from "react-router-dom"






const Sidebar = (props) => {

    const [soccer, setSoccer] = useState(false)
    const [tennis, setTennis] = useState(false)
    const [soccerLeague, setSoccerLeague] = useState(false)
    const [tennisLeague, setTennisLeague] = useState(false)

    const uniqueLeagues = [...new Set(games.map(item => item.league))];

    const goInPlay = () => {
        console.log('clicked')
        props.setSportState(false)
        props.setInPlayState(true)
    }

  return (
    <div className=' flex-col bg-[#222121] h-[870px] hidden sm:flex md:flex lg:flex w-[17em] overflow-hidden overflow-y-scroll'>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <AiTwotoneStar className='text-yellow-400 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1 '>Favourites</p>
        </div>
        <div className={`flex  ${soccer ? "border-green-800" : "border-gray-600"}  cursor-pointer 
        hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]`}
        onClick={()=> setSoccer(!soccer)}
        >
            <BiFootball className='text-white mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Soccer</p>
        </div>
        {soccer && uniqueLeagues.map(league => {
            if(league === 'Premier League'){
                return (
        <div className='flex border-b-[1px] border-gray-700 cursor-pointer
         hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[2.8em]'
         onClick={()=> setSoccerLeague(!soccerLeague)}
         >
            
            <p className='text-gray-200 text-[0.8rem] mt-1 '>{league}</p>
        </div>
            )
            }
            
        })
        }
         {soccer && soccerLeague && games
  .filter(game => game.league === 'Premier League')
  .map(game => (
    <div key={game.id} className='flex flex-col border-b-[1px] border-gray-700 cursor-pointer hover:bg-[#5f5d5d] justify-start px-11 min-h-[2.8em]'>
      <Link onClick={goInPlay} to={`/match/${game.id}`}>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.home}</p>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.away}</p>
      </Link>
    </div>
  ))
}
{soccer && uniqueLeagues.map(league => {
            if(league === 'Champions League'){
                return (
        <div className='flex border-b-[1px] border-gray-700 cursor-pointer
         hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[2.8em]'
         onClick={()=> setSoccerLeague(!soccerLeague)}
         >
            
            <p className='text-gray-200 text-[0.8rem] mt-1 '>{league}</p>
        </div>
            )
            }
            
        })
        }
         {soccer && soccerLeague && games
  .filter(game => game.league === 'Champions League')
  .map(game => (
    <div key={game.id} className='flex flex-col border-b-[1px] border-gray-700 cursor-pointer hover:bg-[#5f5d5d] justify-start px-11 min-h-[2.8em]'>
      <Link onClick={goInPlay} to={`/match/${game.id}`}>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.home}</p>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.away}</p>
      </Link>
    </div>
  ))
}
 

        <div onClick={()=> setTennis(!tennis)}
        className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <BiTennisBall className='text-yellow-300 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Tennis</p>
            
        </div>
        {tennis && uniqueLeagues.map(league => {
            if(league === 'Wimbledon'){
                return (
        <div className='flex border-b-[1px] border-gray-700 cursor-pointer
         hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[2.8em]'
         onClick={()=> setTennisLeague(!tennisLeague)}
         >
            
            <p className='text-gray-200 text-[0.8rem] mt-1 '>{league}</p>
        </div>
            )
            }
            })
        }
         {tennis && tennisLeague && games
  .filter(game => game.league === 'Wimbledon')
  .map(game => (
    <div key={game.id} className='flex flex-col border-b-[1px] border-gray-700 cursor-pointer hover:bg-[#5f5d5d] justify-start px-11 min-h-[2.8em]'>
      <Link onClick={goInPlay} to={`/match/${game.id}`}>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.home}</p>
        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.away}</p>
      </Link>
    </div>
  ))
}
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <BiBaseball className='text-gray-200 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Baseball</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <BiBasketball className='text-amber-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Basketball</p>
        </div>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <GiCurlingStone className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Curling</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <MdSportsEsports className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Esport</p>
        </div>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <GiSoccerBall className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Floorball</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <MdOutlineSportsVolleyball className='text-yellow-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Futsal</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <GiHound className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Greyhounds</p>
        </div>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <MdOutlineSportsHandball className='text-blue-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Handball</p>
        </div>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <GiHorseHead className='text-amber-800 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Horse Racing</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <FaHockeyPuck className='text-black mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Ice Hockey</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <RiBilliardsFill className='text-black mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Snooker</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <FaTableTennis className='text-blue-600 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Table Tennis</p>
        </div>
        <div className='flex cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <FaVolleyballBall className='text-yellow-900 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Volleyball</p>
        </div>
        <div className='flex  cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.2em]'>
            <CgGames className='text-green-900 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-200 text-[0.85rem] mt-1'>Virtual Sports</p>
        </div>
        
        
        
        
    </div>
  )
}

export default Sidebar