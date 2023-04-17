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
    const [soccerLeague, setSoccerLeague] = useState(false)

    const uniqueLeagues = [...new Set(games.map(item => item.league))];

    const goInPlay = () => {
        console.log('clicked')
        props.setSportState(false)
        props.setInPlayState(true)
    }

  return (
    <div className=' flex-col bg-[#2b2a2a] h-[870px] hidden md:flex min-w-[20%] overflow-hidden overflow-y-scroll'>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <AiTwotoneStar className='text-yellow-400 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Favourites</p>
        </div>
        <div className={`flex border-b-2 ${soccer ? "border-green-800" : "border-gray-600"}  cursor-pointer 
        hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]`}
        onClick={()=> setSoccer(!soccer)}
        >
            <BiFootball className='text-white mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Soccer</p>
        </div>
        {soccer && uniqueLeagues.map(league => {
            if(league){
                return (
        <div className='flex border-b-[1px] border-gray-700 cursor-pointer
         hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[2.8em]'
         onClick={()=> setSoccerLeague(!soccerLeague)}
         >
            
            <p className='text-gray-300 text-[0.8rem] mt-1 font-semibold'>{league}</p>
        </div>
            )
            }
            
        })
        }
         {soccer && soccerLeague && games.map(game =>{
            if(game){
                return (
                    <div key={game.id} className='flex flex-col border-b-[1px] border-gray-700 cursor-pointer
         hover:bg-[#5f5d5d] justify-start px-11 min-h-[2.8em]'>
            <Link onClick={goInPlay} to={`/match/${game.id}`}>
                        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.home}</p>
                        <p className='text-gray-300 text-[0.9rem] tracking-widest'>{game.away}</p>
            </Link>
                    </div>
                )
            }
        })}

        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <BiTennisBall className='text-yellow-300 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Tennis</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <BiBaseball className='text-gray-200 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Baseball</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <BiBasketball className='text-amber-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Basketball</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <GiCurlingStone className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Curling</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <MdSportsEsports className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Esport</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <GiSoccerBall className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Floorball</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <MdOutlineSportsVolleyball className='text-yellow-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Futsal</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <GiHound className='text-gray-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Greyhounds</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <MdOutlineSportsHandball className='text-blue-500 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Handball</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <GiHorseHead className='text-amber-800 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Horse Racing</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <FaHockeyPuck className='text-black mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Ice Hockey</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <RiBilliardsFill className='text-black mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Snooker</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <FaTableTennis className='text-blue-600 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Table Tennis</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <FaVolleyballBall className='text-yellow-900 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Volleyball</p>
        </div>
        <div className='flex border-b-2 border-gray-600 cursor-pointer hover:bg-[#5f5d5d] px-3 justify-start items-center min-h-[3.5em]'>
            <CgGames className='text-green-900 mt-1 mr-1 w-6 inline-block' />
            <p className='text-gray-300 text-[0.9rem] mt-1 font-semibold'>Virtual Sports</p>
        </div>
        
        
        
        
    </div>
  )
}

export default Sidebar