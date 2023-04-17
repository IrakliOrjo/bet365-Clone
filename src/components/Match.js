import {AiOutlineStar, AiOutlineArrowDown} from 'react-icons/ai'

import React, { useState, useEffect, useRef } from 'react';

import {games} from './data.js'

import { Link } from "react-router-dom"

import GameStat from './GameStat'


import { useParams } from "react-router-dom"

const Match = (props) => {

    const [data, setData] = useState(null);

      const params = useParams()

      const currentGame = games.filter(game => {
        console.log(game.id)
        if(game.id == params.id){
            return game
        }

      })
    
      const goInPlay = () => {
        
        props.setSportState(true)
        props.setInPlayState(false)
    }

 



  return (
    <div className='flex flex-col-reverse xl:flex-row'>
    <div className='bg-[#313030] flex flex-col w-[32em] md:w-[37em]  xl:w-[44em] overflow-hidden overflow-y-scroll'>
        {/*Header div */}
        <div className='flex flex-col p-6'>
            <Link
             onClick={goInPlay}
             to={'/'}>
            <a className='text-[#9e9e9e] text-[.9rem] cursor-pointer'>{'< back'}</a>
            </Link>
            <p className='text-gray-300 text-[1.5rem] font-bold mb-6'>{currentGame[0].home}  vs {currentGame[0].away}</p>
            <div>
                <ul className='flex text-[.9rem] cursor-pointer gap-6 text-[#9e9e9e]'>
                    <li className='hover:text-white'>All</li>
                    <li className='hover:text-white'>Bet Builder</li>
                    <li className='hover:text-white'>Set</li>
                    <li className='hover:text-white'>Games</li>
                </ul>
            </div>
        </div>
           
        {/*Odds divs begin */}
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p className='text-white font-bold hover:text-green-400'>Fulltime Result</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='h-11 flex'>
                <div  className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>{currentGame[0].home} <span
                    className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].homeOdd}</span></p>
                </div>
                <div  className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>Draw <span 
                    className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].draw}</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>{currentGame[0].away} <span 
                     className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].awayOdd}</span></p>
                </div>
            </div>
        </div>
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p onClick={props.handleClick} className='text-white font-bold hover:text-green-400'>Double Chance</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='min-h-11 flex'>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>{currentGame[0].home} or Draw <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].homeX}</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>{currentGame[0].home} or {currentGame[0].away} <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].oneTwo}</span></p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'>{currentGame[0].away} or Draw <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].awayX}</span></p>
                </div>
            </div>
        </div>
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p className='text-white font-bold hover:text-green-400'>Match Goals</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='bg-[#615e5ec9] flex pl-[20em]'>
                <p className='text-[.8rem] mr-[16.5em] text-[#bbb8b8]'>Over</p>
                <p className='text-[.8rem]  text-[#bbb8b8]'>Under</p>
            </div>
            <div className='h-11 flex'>
                <div className='basis-[80%] h-full text-center border-r-[1px] border-[#929090] text-[#d1d0d0] px-6 '>
                    <p className='mt-2'>2.5</p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 text-center hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'> <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].overTwo}</span></p>
                </div>
                <div className='basis-[100%] h-full text-center text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'><span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].underTwo}</span></p>
                </div>
            </div>
        </div>
        <div className='flex flex-col cursor-pointer border-t-2 border-green-800  bg-[#474646]'>
            <div className='h-11 flex px-6 justify-between items-center border-b-[1px] group border-[#807f7f]'>
                <p className='text-white font-bold hover:text-green-400'>Alternative Match Goals</p>
                <div className='flex invisible group-hover:visible gap-8'>
                <AiOutlineStar className='text-[#797878] hover:text-[#c9c4c4] ' />
                <AiOutlineArrowDown className='text-[#797878]' />
                </div>
            </div>
            <div className='bg-[#615e5ec9] flex pl-[20em]'>
                <p className='text-[.8rem] mr-[16.5em] text-[#bbb8b8]'>Over</p>
                <p className='text-[.8rem]  text-[#bbb8b8]'>Under</p>
            </div>
            <div className='h-11 flex border-b-[1px] border-[#666565]'>
                <div className='basis-[80%] h-full text-center border-r-[1px] border-[#929090] text-[#d1d0d0] px-6 '>
                    <p className='mt-2'>0.5</p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 text-center hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'> <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].overZero}</span></p>
                </div>
                <div className='basis-[100%] h-full text-center text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'><span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].underZero}</span></p>
                </div>
            </div>
            <div className='h-11 flex border-b-[1px] border-[#666565]'>
                <div className='basis-[80%] h-full text-center border-r-[1px] border-[#929090] text-[#d1d0d0] px-6 '>
                    <p className='mt-2'>1.5</p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 text-center hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'> <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].overOne}</span></p>
                </div>
                <div className='basis-[100%] h-full text-center text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'><span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].underOne}</span></p>
                </div>
            </div>
            <div className='h-11 flex border-b-[1px] border-[#666565]'>
                <div className='basis-[80%] h-full text-center border-r-[1px] border-[#929090] text-[#d1d0d0] px-6 '>
                    <p className='mt-2'>3.5</p>
                </div>
                <div className='basis-[100%] h-full text-white px-6 text-center hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'> <span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].overThree}</span></p>
                </div>
                <div className='basis-[100%] h-full text-center text-white px-6 hover:bg-[#666464]'>
                    <p onClick={props.handleClick} className='mt-2'><span className='text-yellow-300 ml-1 text-[.9rem]'>{currentGame[0].underThree}</span></p>
                </div>
            </div>
        </div>
    </div>
    <GameStat
    home={currentGame[0].home}
    away={currentGame[0].away}
    />
    </div>
  )
}

export default Match