import React from 'react'

import field from '../img/stad.png'

import stat1 from '../img/stat1.png'
import flag from '../img/flag.png'
import shots from '../img/shots.png'

import {BsFillPlayBtnFill} from 'react-icons/bs'
import {GiSoccerField} from 'react-icons/gi'


const GameStat = (props) => {
  return (
    <div className='flex flex-col bg-[#313030] items-center'>
        <div className='flex justify-center w-[15em] md:w-[28em] lg:w-[31em] pt-4 items-center border-b-[1px] border-gray-600'>
            <div className='flex flex-col justify-center items-center'>
            <p className='text-[#eee9e9] font-semibold text-[1rem]'>{props.home} 
            <span className='text-[yellow] inline-block ml-4 mr-4 text-[1.1rem]'>0 - 0</span> {props.away} </p>
            <div className='mb-[-6px]'>
            <div className='w-[1.4rem] inline-block bg-[#921111] h-[.2rem]'></div>
            <div className='w-[1.4rem] inline-block bg-[#000000] h-[.2rem]'></div>
            </div>
            </div>
        </div>
        <div className='mt-3 flex gap-3'>
            <BsFillPlayBtnFill className='text-[1.4rem] hover:text-red-700 cursor-pointer text-white' />
            <GiSoccerField className='text-[1.5rem] cursor-pointer text-green-500' />
        </div>
        <div className={`w-[25em] h-[11.23em] mt-5 bg-[url(./img/stad.png)] `}></div>
        <div className='flex w-[25em] justify-between mt-3'>
            <p className='text-[#979393] cursor-pointer hover:text-white text-[.8rem]'>Show Goalscorers</p>
            <p className='text-[#979393] cursor-pointer hover:text-white text-[.8rem]'>Show Match Info</p>
        </div>
        {/* Stats Menu */}
        <div className='flex mt-7 border-b-[1px] border-gray-600 w-full justify-center'>
            <ul className='flex gap-5 mb-4 text-[#a7a4a4] text-[.85rem] font-semibold'>
                <li className='hover:text-white cursor-pointer'>Stats</li>
                <li className='hover:text-white cursor-pointer'>Player Stats</li>
                <li className='hover:text-white cursor-pointer'>Timeline</li>
                <li className='hover:text-white cursor-pointer'>Lineups</li>
                <li className='hover:text-white cursor-pointer'>Table</li>
            </ul>
        </div>
        {/* Stats */}
        <div className='flex justify-between gap-[10em] mb-8 mt-5'>
            <div className='flex flex-col'>
                <p className='text-[.75rem] ml-3 text-[#a7a4a4] mb-1'>Attacks</p>
                <div className='flex'>
                    <p className='text-white mt-1 font-semibold'>0</p>
                    <img className='mx-1' src={stat1} />
                    <p className='text-white mt-1 font-semibold'>0</p>
                </div>
            </div>
             <div className='flex flex-col'>
                <p className='text-[.75rem] ml-1 text-[#a7a4a4] mb-1'>Possesion %</p>
                <div className='flex'>
                    <p className='text-white mt-1 font-semibold'>0</p>
                    <img className='mx-1' src={stat1} />
                    <p className='text-white mt-1 font-semibold'>0</p>
                </div>
            </div>
        </div>
        <div className='flex w-full justify-center gap-4'>
            <div className='flex flex-col'>
                <img className='mt-[-.15rem]' src={flag} />
                <p className='text-white mt-[.02rem]  font-semibold text-[.9rem]'>0</p>
            </div>
            <div className='-ml-1'>
                <div className='w-2 h-3 bg-red-700'></div>
                <p className='text-white font-semibold text-[.9rem]'>0</p>
            </div>
            <div>
                <div className='w-2 h-3 bg-yellow-500'></div>
                <p className='text-white font-semibold text-[.9rem]'>0</p>
            </div>
            <div className='flex flex-col mx-5 text-center mt-[-.30rem]'>
                <p className='text-[.75rem] ml-2  text-[#a7a4a4]'>Shots/On Target</p>
                <div className='flex'>
                    <p className='text-white font-semibold text-[.9rem]'>0/0</p>
                    <div className='flex flex-col mt-[.40rem] mx-2'>
                        <img className='mb-1' src={shots} />
                        <img src={shots} />
                    </div>
                    <p className='text-white font-semibold text-[.9rem]'>0/0</p>
                </div>
                
            </div>
            <div className='flex flex-col'>
                <img className='mt-[-.15rem]' src={flag} />
                <p className='text-white mt-[.02rem]  font-semibold text-[.9rem]'>0</p>
            </div>
            <div className='-ml-1'>
                <div className='w-2 h-3 bg-red-700'></div>
                <p className='text-white font-semibold text-[.9rem]'>0</p>
            </div>
            <div>
                <div className='w-2 h-3 bg-yellow-500'></div>
                <p className='text-white font-semibold text-[.9rem]'>0</p>
            </div>
        </div>
    </div>
  )
}

export default GameStat