import React from 'react'

import bh from '../img/bh.png'
import bj from '../img/bj.png'
import im from '../img/im.png'
import sw from '../img/sw.png'
import tg from '../img/tg.png'
import tp from '../img/tp.png'

import {games} from './data.js'

const FeaturedMatch = () => {
  return (
    <div className='flex px-6 bg-[#7c797963] flex-col '>
        <p className='text-[#09d6aa] my-4 font-bold'>Featured Matches</p>
        <div className='flex flex-col justify-center w-full items-center md:flex-row md:justify-evenly md:gap-4'>
            <div className='bg-[#646262] mb-4 basis-[100%] w-[18em] h-[9em] rounded-md text-center max-w-[18em]'>
                <p className='text-[.8rem] text-[#cec7c7]'>Today 22:00</p>
                <p className='text-white text-[.8rem] font-bold'>V</p>
                <div className='flex justify-between gap-6 mb-2 w-full'>
                    <p className='text-white text-[.90rem] ml-11 font-bold'>{games[0].home}</p>
                    <p className='text-white text-[.90rem] mr-11 font-bold'>{games[0].away}</p>
                </div>
                    <div className='w-full bg-[#808080] h-[.10rem]'></div>
                    <div className='flex justify-around'>
                        <p className='text-white mt-4 hover:bg-[#a09d9d] cursor-pointer h-full w-full text-[.90rem]'>1 <span className='text-yellow-400'>{games[0].homeOdd}</span></p>
                        <p className='text-white mt-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full  text-[.90rem]'>X <span className='text-yellow-400'>{games[0].draw}</span></p>
                        <p className='text-white mt-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full text-[.90rem]'>2 <span className='text-yellow-400'>{games[0].awayOdd}</span></p>
                    </div>
            </div>
            <div className='bg-[#646262] mb-4 basis-[100%] w-[18em] h-[9em] rounded-md text-center max-w-[18em]'>
                <p className='text-[.8rem] text-[#cec7c7]'>Today 22:00</p>
                <p className='text-white text-[.8rem] font-bold'>V</p>
                <div className='flex justify-between gap-6 mb-2 w-full'>
                    <p className='text-white text-[.90rem] ml-2 font-bold'>{games[1].home}</p>
                    <p className='text-white text-[.90rem] mr-2 font-bold'>{games[1].away}</p>
                </div>
                    <div className='w-full bg-[#808080] h-[.10rem]'></div>
                    <div className='flex justify-around'>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer h-full w-full text-[.90rem]'>1 <span className='text-yellow-400'>{games[1].homeOdd}</span></p>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full  text-[.90rem]'>X <span className='text-yellow-400'>{games[1].draw}</span></p>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full text-[.90rem]'>2 <span className='text-yellow-400'>{games[1].awayOdd}</span></p>
                    </div>
            </div>
            <div className='bg-[#646262] mb-4 basis-[100%] w-[18em] h-[9em] rounded-md text-center max-w-[18em]'>
                <p className='text-[.8rem] text-[#cec7c7]'>Today 22:00</p>
                <p className='text-white text-[.8rem] font-bold'>V</p>
                <div className='flex justify-between gap-6 mb-2 w-full'>
                    <p className='text-white text-[.90rem] ml-11 font-bold'>{games[2].home}</p>
                    <p className='text-white text-[.90rem] mr-11 font-bold'>{games[2].away}</p>
                </div>
                    <div className='w-full bg-[#808080] h-[.10rem]'></div>
                    <div className='flex justify-around'>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer h-full w-full text-[.90rem]'>1 <span className='text-yellow-400'>{games[2].homeOdd}</span></p>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full  text-[.90rem]'>X <span className='text-yellow-400'>{games[2].draw}</span></p>
                        <p className='text-white my-4 hover:bg-[#a09d9d] cursor-pointer w-full h-full text-[.90rem]'>2 <span className='text-yellow-400'>{games[2].awayOdd}</span></p>
                    </div>
            </div>
        </div>  
        <div>
            <p className='text-[#09d6aa] my-4 font-bold'>Instant Games</p>
            <div className='flex mb-2 w-full gap-2 justify-center'>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={bh} />
                </div>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={bj} />
                </div>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={im} />
                </div>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={sw} />
                </div>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={tg} />
                </div>
                <div>
                <img className='cursor-pointer w-full hover:brightness-150' src={tp} />
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default FeaturedMatch